console.log('testing hello world');
const express = require('express');
const authMiddleware = require('./auth-middleware');
const { Client } = require('pg');
// const cors = require('cors');
const { graphql, buildSchema } = require('graphql');
const { ruruHTML } = require("ruru/server");
const { createHandler } = require('graphql-http/lib/use/express');
const firebase = require('firebase-admin');
const { ApolloServer } = require('apollo-server-express');
const credentials = require('./service-credential-key.json');
const { initializeDatabase } = require('./database');
const { initializeImageStorage } = require('./imageStorage');
require('dotenv').config();

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
})
console.log(credentials);

const port = process.env.PORT || 4000;
const app = express();

initializeDatabase();
const s3 = initializeImageStorage();

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// the rootValue provides a resolver for each API endpoint
var root = {
    hello() {
        return "Hello world!";
    }
};

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Success: ', data.Buckets);
        console.log('data: ', data);
    }
});

// console.log('aws.s3: ', new AWS.S3().getObject({
//     Bucket: 'artscape-images',
//     Key: '0DB3C375-8794-473C-B8A4-4417F6FF6000.jpg'
// }, function(err, data) {
//     if (!err) {
//         // console.log(data.Body.toString());
//     }
// }));

const presignedUrl = s3.getSignedUrl('getObject', {
    Bucket: 'artscape-images',
    Key: '0DB3C375-8794-473C-B8A4-4417F6FF6000.jpg',
    Expires: 60
});

// console.log('presignedUrl', presignedUrl);

// Create and use the GraphQL handler.
// app.all(
//     "/graphql",
//     createHandler({
//         schema: schema,
//         rootValue: root,
//     })
// );

const typeDefs = gql`
    type Note {
        id: ID!
        content: String!
        author: User!
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [(depthLimit(5), createComplexityLimitRule(1000))]
});

app.use('/', authMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World Server');
});
app.listen({ port }, () => console.log(`listening on port ${port}`));
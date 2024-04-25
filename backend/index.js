console.log('testing hello world');
const express = require('express');
const authMiddleware = require('./auth-middleware');
const { Client } = require('pg');
// const cors = require('cors');
const { graphql, buildSchema } = require('graphql');
const { ruruHTML } = require("ruru/server");
const { createHandler } = require('graphql-http/lib/use/express');
const firebase = require('firebase-admin');
const credentials = require('./service-credential-key.json');
require('dotenv').config();

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
})
console.log(credentials);

const port = process.env.PORT || 4000;
const app = express();

const client = new Client({
    user: 'postgres',
    password: '123',
    host: 'localhost', 
    port:'5432',
    database: 'postgres' });

client
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
}); 

// app.use(helmet());
// app.use(cors());

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

//graphql({
//    schema,
//    source: "{ hello }",
//    rootValue: root,
//}).then(response => {
//    console.log(response);
//})

//   apiKey: "AIzaSyDb8L06jQSUByvPyjKSXLGsbx6-1XgoJ2o",
//   authDomain: "artscape-121ae.firebaseapp.com",
//   projectId: "artscape-121ae",
//   storageBucket: "artscape-121ae.appspot.com",
//   messagingSenderId: "641908100895",
//   appId: "1:641908100895:web:9a4a2c34c7a4c635e8ea2a",
//   measurementId: "G-LR33F7MW2J"

// Load the AWS SDK
const AWS = require('aws-sdk');
// set up the region
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

// Create S3 Service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Success: ', data.Buckets);
        console.log('data: ', data);
    }
});

// Create and use the GraphQL handler.
app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
);

app.use('/', authMiddleware);

app.get('/', (req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});
app.listen({ port }, () => console.log(`listening on port ${port}`));
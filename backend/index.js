const express = require('express');
const authMiddleware = require('./auth-middleware');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const { ApolloServer } = require('apollo-server-express');
const credentials = require('./service-credential-key.json');
const { initializeDatabase } = require('./database');
const { initializeImageStorage } = require('./imageStorage');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
})
console.log(credentials);

const port = process.env.PORT || 4000;
const app = express();

// app.use(helmet());
// app.use(cors());
// const cors = require('cors');
// const corsOptions = {
//   credentials: true,
//   origin: ["http://localhost:3000"]
// }
// app.use(cors(corsOptions));
app.use(cors());

initializeDatabase();
const s3 = initializeImageStorage();

// const schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

// Call S3 to list the buckets
// s3.listBuckets(function (err, data) {
//     if (err) {
//         console.log('Error: ', err);
//     } else {
//         console.log('Success: ', data.Buckets);
//         console.log('data: ', data);
//     }
// });

// console.log('aws.s3: ', new AWS.S3().getObject({
//     Bucket: 'artscape-images',
//     Key: '0DB3C375-8794-473C-B8A4-4417F6FF6000.jpg'
// }, function(err, data) {
//     if (!err) {
//         // console.log(data.Body.toString());
//     }
// }));

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres');

// const Testing1 = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       };
// }

// Testing1();

// console.log('sequelize: ', sequelize);

const presignedUrl = s3.getSignedUrl('getObject', {
    Bucket: 'artscape-images',
    Key: '0DB3C375-8794-473C-B8A4-4417F6FF6000.jpg',
    Expires: 60
});
console.log('PRESIGNED URL', presignedUrl);

const typeDefs = require('./schema');
let resolvers = {};
resolvers.Query = require('./resolvers/Query');
console.log('resolvers: ', resolvers.Query);

const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');

const corsOptions = {
    origin: "http://localhost:3000/",
    credentials: true
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    optionsSuccessStatus: 200,
    // cors: corsOptions
    // validationRules: [(depthLimit(5), createComplexityLimitRule(1000))]
});


// const Temp = async () => {
//     await server.start();
//     server.applyMiddleware({ app, path: '/api' });
// }
// Temp();

server.start().then(res => {
    server.applyMiddleware({ app, path: '/api'});
});


// app.use(function(req, res, next) {
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

// app.use('/', authMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World Server');
});

app.listen({ port }, () => console.log(`listening on port ${port}`));
const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Query {
        users: [User!]!
    }
`;
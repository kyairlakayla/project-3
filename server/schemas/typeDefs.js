const { gql } = require('apollo-server-express');

const typeDefs = gql `
type Comments {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    recipeID: String
  }
type Query {
    comments(username: String): [Comments]
}
`;

module.exports = typeDefs;
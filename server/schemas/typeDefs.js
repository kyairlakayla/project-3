const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    comments: [Comments]
    likes: [Likes]
  }
type Comments {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    recipeID: String
  }
  type Likes {
    _id: ID 
    username: String
    createdAt: String
    recipeID: String
}
type Query {
    users: [User]
    user(username: String!): User
    comments(username: String): [Comments]
    likes(username: String!): [Likes]

}
`;

module.exports = typeDefs;
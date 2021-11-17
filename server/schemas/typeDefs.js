const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        comments: [Comments]
        Likes: [Likes]
    }
    type Comments {
        _id: ID
        commentText: String
        username: String
        createdAt: String
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
        comments(username: String!): [Comments]
        likes(username: String!): [Likes]
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User 
        addComment(commentText: String!): Comments
        addLike(recipeID: String!): Likes
    }
`;

module.exports = typeDefs;
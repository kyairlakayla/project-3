const { Comments} = require('../models');
//const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query:  {
        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comments.find(params).sort({ createdAt: -1 });
          },
          comments: async (parent, { _id }) => {
            return Comments.findOne({ _id });
          },
          // get all users
          users: async () => {
            return User.find()
             .select('-__v -password')
             .populate('comments')
             .populate('likes');
           },
          // get a user by username
          user: async (parent, { username }) => {
             return User.findOne({ username })
               .select('-__v -password')
               .populate('comments')
               .populate('likes');
            },
      }
}

module.exports = resolvers;
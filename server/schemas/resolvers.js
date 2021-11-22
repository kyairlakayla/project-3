const { User, Comments, Likes } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

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
      },
      Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
          
            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            return user;
        }
      }  
}

module.exports = resolvers;
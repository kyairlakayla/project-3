const { User, Comments, Likes } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:  {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('comments')
                .populate('likes');
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
          },
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
            const token = signToken(user);

            return { token, user };
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
            const token = signToken(user);

            return { token, user};
        },
        addComment: async (parent, args, context) => {
            if (context.user) {
              const comment = await Comments.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { commment: comments._id } },
                { new: true }
              );
          
              return comment;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          }
      }  
}

module.exports = resolvers;
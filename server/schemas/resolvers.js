const { Comments} = require('../models');
//const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query:  {
        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comments.find(params).sort({ createdAt: -1 });
          },
      }
}

module.exports = resolvers;
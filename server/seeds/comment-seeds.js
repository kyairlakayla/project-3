const { Comments } = require('../models');

const commentData = [
    {
        comment_text: "Wow, this looks delicious!",
        _id: 1,
        recipeID: 556177
    },
    {
        comment_text: "I tried this receipe. It turned out pretty good.",
        _id: 2,
        recipeID: 457747
    },
    {
        comment_text: "Looking forward to trying this one!",
        _id: 3,
        recipeID: 362913
    },
    {
        comment_text: "I recommend cooking this one a little longer than the recommended time.",
        _id: 4,
        recipeID: 247018
    },
    {
        comment_text: "Looks yummy!",
        _id: 4,
        recipeID: 196932
    },
    {
        comment_text: "One word: interesting...",
        _id: 3,
        recipeID: 111567
    },
    {
        comment_text: "Must try!",
        _id: 2,
        recipeID: 643426
    },
    {
        comment_text: "Didn't really like this one.",
        _id: 1,
        recipeID: 144777
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
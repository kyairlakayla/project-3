const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const commentSchema = new Schema (
    {
        commentText: {
            type: String,
            required: 'Please include a comment!',
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        recipeID: {
            type: String,
            required: true
        }
    }
);


const Comments = model('Comments', commentSchema);

module.exports = Comments;
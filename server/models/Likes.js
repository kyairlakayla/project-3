const { Schema, model } = require('mongoose');

const likesSchema = new Schema (
    {
        id: {
            type: Number,
            required: true
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

const Likes = model('Likes', likesSchema);

module.exports = Likes;
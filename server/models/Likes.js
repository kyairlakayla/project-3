const { Schema, model } = require('mongoose');

const likesSchema = new Schema (
    // username 
    // recipeURL
    // createdAt?
)

const Likes = model('Likes', likesSchema);

module.exports = Likes;
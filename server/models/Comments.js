const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const commentSchema = new Schema (
    // username 
    // createdAt
    // commentText
    // recipeUrl 
)


const Comments = model('Comments', commentSchema);

module.exports = Comments;
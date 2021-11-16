const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new Schema (
    // username 
    // email
    // password
    // comments 
)

// user login auth 

const User = model('User', userSchema);

module.exports = User;
const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comments'
            }
        ],
    }
);

// user login auth 

const User = model('User', userSchema);

module.exports = User;
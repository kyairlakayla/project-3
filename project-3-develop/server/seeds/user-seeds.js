const { User } = require('../models');

const userData = [
    {
        username: "kayla555",
        email: "kaylad@email.com",
        password: "password123"
    },
    {
        username: "shane444",
        email: "shaneb@email.com",
        password: "password123"
    },
    {
        username: "alex333",
        email: "alexc@email.com",
        password: "password123"
    },
    {
        username: "shannon222",
        email: "shannonp@email.com",
        password: "password123"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

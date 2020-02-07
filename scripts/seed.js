const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/casinoShickDB"
);

const userSeed = [
    {
        email: "test@test.com",
        username: "testUN",
        earnings: 100,
        birthday: "1994-06-03",
        gender: "female",
        avatar: "",
        wins: {
            blackJack: {
                wins: 12,
                totalGames: 43
            },
            craps: {
                wins: 1,
                totalGames: 7
            },
            roulette: {
                wins: 6,
                totalGames: 13
            },
            slots: {
                wins: 8,
                totalGames: 52
            }
        },
        date: new Date(Date.now())
    },
    {
        email: "hello@test.com",
        username: "helloUN",
        earnings: 145,
        birthday: "1989-03-21",
        gender: "female",
        avatar:"",
        wins: {
            blackJack: {
                wins: 45,
                totalGames: 98
            },
            craps: {
                wins: 17,
                totalGames: 79
            },
            roulette: {
                wins: 3,
                totalGames: 10
            },
            slots: {
                wins: 0,
                totalGames: 2
            }
        },
        date: new Date(Date.now())
    },
    {
        email: "new@test.com",
        username: "newUN",
        earnings: 145,
        birthday: "1992-04-24",
        gender: "male",
        avatar: "",
        wins: {
            blackJack: {
                wins: 23,
                totalGames: 45
            },
            craps: {
                wins: 1,
                totalGames: 4
            },
            roulette: {
                wins: 67,
                totalGames: 123
            },
            slots: {
                wins: 45,
                totalGames: 102
            }
        },
        date: new Date(Date.now())
    }
];

const chatSeed = [
    {
        roomName: "General Chat",
        user: "testUN",
        author: "testUN",
        message: "testing new db",
        createdDate: new Date(Date.now())
    },
    {
        roomName: "General Chat",
        user: "helloUN",
        author: "helloUN",
        message: "will this work",
        createdDate: new Date(Date.now())
    },
    {
        roomName: "General Chat",
        user: "testUN",
        author: "testUN",
        message: "let's see",
        createdDate: new Date(Date.now())
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(`${data.result.n} user records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Chat
    .remove({})
    .then(() => db.Chat.collection.insertMany(chatSeed))
    .then(data => {
        console.log(`${data.result.n} Chat records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
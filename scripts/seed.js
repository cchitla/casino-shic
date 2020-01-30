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
        winsLosses: {
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
        winsLosses: {
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

const genChat = [
    {
        user: "testUN",
        author: "testUN",
        message: "hello",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "what's up",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "not much",
        date: new Date(Date.now())
    }
];

const blackJackChat = [
    {
        user: "testUN",
        author: "testUN",
        message: "hello",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "what's up",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "not much",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "dude i keep losing",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "guess you're unlucky",
        date: new Date(Date.now())
    }
];

const crapsChat = [
    {
        user: "testUN",
        author: "testUN",
        message: "hello",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "what's up",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "not much how about you",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "wishing i was at a real casino",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "i'm going to vicksburg this weekend! this game is good practice",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "hmu i'll come with!",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "sure!",
        date: new Date(Date.now())
    }
];

const rouletteChat = [
    {
        user: "testUN",
        author: "testUN",
        message: "hello",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "what's up",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "bye",
        date: new Date(Date.now())
    }
];

const slotsChat = [
    {
        user: "testUN",
        author: "testUN",
        message: "hello",
        date: new Date(Date.now())
    },
    {
        user: "helloUN",
        author: "helloUN",
        message: "sdifsidf",
        date: new Date(Date.now())
    },
    {
        user: "testUN",
        author: "testUN",
        message: "ertyuiop",
        date: new Date(Date.now())
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

db.GenChat
    .remove({})
    .then(() => db.GenChat.collection.insertMany(genChat))
    .then(data => {
        console.log(`${data.result.n} General Chat records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.BlackJackChat
    .remove({})
    .then(() => db.BlackJackChat.collection.insertMany(blackJackChat))
    .then(data => {
        console.log(`${data.result.n} Black Jack Chat records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.CrapsChat
    .remove({})
    .then(() => db.CrapsChat.collection.insertMany(crapsChat))
    .then(data => {
        console.log(`${data.result.n} Craps Chat records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.RouletteChat
    .remove({})
    .then(() => db.RouletteChat.collection.insertMany(rouletteChat))
    .then(data => {
        console.log(`${data.result.n} Roulette Chat records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.SlotsChat
    .remove({})
    .then(() => db.SlotsChat.collection.insertMany(slotsChat))
    .then(data => {
        console.log(`${data.result.n} Slots Chat records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // email will be unique identifier for the users
    email: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    earnings: {
        type: Number,
        default: 100
    },
    birthday: {
        type: String
    },
    gender: {
        type: String
    },
    avatar: {
        type: String
    },
    wins: {
        blackJack: {
            wins: {
                type: Number,
                default: 0
            },
            totalGames: {
                type: Number,
                default: 0
            }
        },
        craps: {
            wins: {
                type: Number,
                default: 0
            },
            totalGames: {
                type: Number,
                default: 0
            }
        },
        roulette: {
            wins: {
                type: Number,
                default: 0
            },
            totalGames: {
                type: Number,
                default: 0
            }
        },
        slots: {
            wins: {
                type: Number,
                default: 0
            },
            totalGames: {
                type: Number,
                default: 0
            }
        }
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// max win, and then 
// returning top scores
// db.user.find().sort(game.wins -1 (descending)).limit(however many I want to return)


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
        required: true
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
            wins: { type: Number },
            totalGames: { type: Number }
        },
        craps: {
            wins: { type: Number },
            totalGames: { type: Number }
        },
        roulette: {
            wins: { type: Number },
            totalGames: { type: Number }
        },
        slots: {
            wins: { type: Number },
            totalGames: { type: Number }
        }
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
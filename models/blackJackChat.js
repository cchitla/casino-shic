const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blackJackChatSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    message: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const BlackJackChat = mongoose.model("BlackJackChat", blackJackChatSchema);

module.exports = BlackJackChat;
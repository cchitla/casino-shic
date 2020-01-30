const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rouletteChatSchema = new Schema({
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

const RouletteChat = mongoose.model("RouletteChat", rouletteChatSchema);

module.exports = RouletteChat;
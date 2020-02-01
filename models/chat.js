const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
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

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
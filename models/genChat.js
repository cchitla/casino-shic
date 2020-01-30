const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genChatSchema = new Schema({
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

const GenChat = mongoose.model("GenChat", genChatSchema);

module.exports = GenChat;
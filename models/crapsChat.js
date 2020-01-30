const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crapsChatSchema = new Schema({
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

const CrapsChat = mongoose.model("CrapsChat", crapsChatSchema);

module.exports = CrapsChat;
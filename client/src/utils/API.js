import axios from "axios";

export default {

    getAllPlayers: function () {
        return axios.get('/api/users');
    },
    getTopBlackJack: function () {
        return axios.get('/api/rankings/blackjack');
    },
    getTopCraps: function () {
        return axios.get('/api/rankings/craps');
    },
    getTopRoulette: function () {
        return axios.get('/api/rankings/roulette');
    },
    getTopSlots: function () {
        return axios.get('/api/rankings/slots');
    },
    getOnePlayer: function () {
        return axios.get('/api/users/:id');
    },
    createPlayer: function () {
        return axios.post('/api/users');
    },
    updatePlayer: function () {
        return axios.put('/api/users/:id');
    },
    deletePlayer: function () {
        return axios.delete('/api/users/:id');
    },
    getChatMessages: function () {
        return axios.get('/api/chats');
    },
    createChatMessage: function () {
        return axios.post('/api/chats');
    },
    deleteChatMessage: function () {
        return axios.delete('/api/chats/:id');
    }
};
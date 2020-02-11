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
    getOnePlayer: function (id) {
        return axios.get(`/api/users/${id}`);
    },
    createPlayer: function (email) {
        return axios.post(`/api/users/`, email);
    },
    updatePlayer: function (id) {
        return axios.put(`/api/users/${id}`);
    },
    deletePlayer: function (id) {
        return axios.delete(`/api/users/${id}`);
    },
    getChatMessages: function () {
        return axios.get('/api/chats');
    },
    createChatMessage: function () {
        return axios.post('/api/chats');
    },
    deleteChatMessage: function (id) {
        return axios.delete(`/api/chats/${id}`);
    }
};
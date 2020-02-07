const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Chat
            .find(req.query)
            .sort({ createdDate: -1 })
            .then(dbChat => res.json(dbChat))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Chat
            .create(req.body)
            .then(dbChat => res.json(dbChat))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Chat
            .findById({ _id: req.params.id })
            .then(dbChat => dbChat.remove())
            .then(dbChat => res.json(dbChat))
            .catch(err => res.status(422).json(err));
    }
};

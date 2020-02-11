const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.User
            .find({})
            .sort({ username: 1 })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findTopRankedBlackJack: function (req, res) {
        db.User
            .find({})
            .sort({ 'wins.blackJack.wins': -1 })
            .limit(5)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findTopRankedCraps: function (req, res) {
        db.User
            .find({})
            .sort({ 'wins.craps.wins': -1 })
            .limit(5)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findTopRankedSlots: function (req, res) {
        db.User
            .find({})
            .sort({ 'wins.slots.wins': -1 })
            .limit(5)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findTopRankedRoulette: function (req, res) {
        db.User
            .find({})
            .sort({ 'wins.roulette.wins': -1 })
            .limit(5)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.User
            .findOne({ email: req.params.id })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ email: req.params.id }, req.body)
            .then(dbUser => {res.json(dbUser)})
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findOne({ email: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};

const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router
    .route("/blackjack")
    .get(usersController.findTopRankedBlackJack);

router
    .route("/craps")
    .get(usersController.findTopRankedCraps);

router
    .route("/roulette")
    .get(usersController.findTopRankedRoulette);

router
    .route("/slots")
    .get(usersController.findTopRankedSlots);

module.exports = router;
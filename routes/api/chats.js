const router = require("express").Router();
const chatsController = require("../../controllers/chatsController");

router.route("/")
    .get(chatsController.findAll)
    .post(chatsController.create);

router
    .route("/:id")
    .delete(chatsController.remove);

module.exports = router;

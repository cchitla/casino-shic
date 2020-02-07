const router = require("express").Router();
const userRoutes = require("./users");
const chatRoutes = require("./chats");
const profileRoutes = require("./profile");
const rankingRoutes = require("./rankings");

router.use("/users", userRoutes);
router.use("/chats", chatRoutes);
router.use("/profile", profileRoutes);
router.use("/rankings", rankingRoutes);

module.exports = router;
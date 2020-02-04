const router = require("express").Router();
const userRoutes = require("./users");
const chatRoutes = require("./chats");
const profileRoutes = require("./profile");

router.use("/users", userRoutes);
router.use("/chats", chatRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
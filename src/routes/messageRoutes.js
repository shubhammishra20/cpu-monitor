const express = require("express");
const router = express.Router();
const { scheduleMessagePost } = require("../controllers/messageController");

router.post("/schedule-message", scheduleMessagePost);

module.exports = router;

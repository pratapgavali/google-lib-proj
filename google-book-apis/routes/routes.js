const express = require("express");
const { userLogs, getUserLogs } = require("../controllers/controllers");
const router = express.Router();

router.post("/logs", userLogs);

router.get("/getLogs", getUserLogs);

module.exports = router;

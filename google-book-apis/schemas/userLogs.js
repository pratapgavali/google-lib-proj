const mongoose = require("mongoose");

const userLogSchema = mongoose.Schema({
  userName: String,
  userEmail: String,
  searchQuery: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UserLog = mongoose.model("UserLog", userLogSchema);

module.exports = UserLog;

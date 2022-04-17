const UserLog = require("../schemas/userLogs");

exports.userLogs = async (req, res) => {
  console.log("inside user log");
  const { user, query } = req.body;
  const userLogs = {
    userName: user.name,
    userEmail: user.email,
    searchQuery: query,
  };
  const newLog = new UserLog(userLogs);
  console.log("user logs is", userLogs);
  try {
    await newLog.save();
    console.log("created successfully");
    res.status(201).json(newLog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getUserLogs = async (req, res) => {
  console.log("inside get user logs...");

  try {
    const userLogs = await UserLog.find();
    res.status(200).json(userLogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");

const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("====================================");
      console.log("app is running at ", PORT);
      console.log("====================================");
    });
  })
  .catch((e) => {
    console.log("Something went wrong!", e);
  });
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("hello to google lib api");
});

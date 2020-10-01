const { urlencoded } = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// Settings
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use(require("./routes/APIroutes"));

// Start the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

// Framework for the server
const express = require("express");
// Conector for MongoDB
const mongoose = require("mongoose");
// Sending info from client to server
const bodyParser = require("body-parser");

// API routes 
const item = require("./routes/api/items");


// Initializing the app
const app = express();

// bodyParser - MiddleWare
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB @ Cloud Database"))
    .catch(() => console.log("Error coneccting to MongoDB @ Cloud"));

// Use Routes from the API
app.use("/api/items", item);

// Defining application port:
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Server application started on port: ${port}`)
);

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connection established with database."));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
const channelsRouter = require("./routes/channels");

app.use("/subscribers", subscribersRouter);
app.use("/channels", channelsRouter);

app.listen(3000, () => console.log("Online!"));
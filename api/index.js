const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const connectDB = require("./dbConnection/dbConnection");
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
connectDB();
app.use(express.json());
app.listen(4000);
app.use(router);

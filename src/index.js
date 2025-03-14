// require('dotenv').config()
import mongoose, { connect } from "mongoose";
import express from "express";
const app = express();
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env",
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Mongo db connection Failed!!!", error);


});
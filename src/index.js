// require('dotenv').config()
import mongoose from "mongoose";

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env",
});




// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGOO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error(error);
//       throw Error("Unable to connect to MongoDB");
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error(error);
//   }
// })();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http, { Server } from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/api/v1", routes);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend', 'build')));
//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
//   })
// }
//mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MONGO CONNECTED");
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
   console.log({ err });
    process.exit(1);
  });

import express from "express";
import dotenv from "dotenv";
import Router from "./routes/Routes.js";
import { connectDB } from "./config/Database.js";
import cors from 'cors'
dotenv.config();

const PORT = process.env.PORT || 4002;

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use((req, res, next) => {
    console.log(`request method : ${req.method} and request url :${req.url}`);
    next();
})
app.use("/api/info", Router);  //middleware

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
});




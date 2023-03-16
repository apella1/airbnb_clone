import express, { Express, Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app: Express = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());

// the secret keys should not be pushed to public repos
const MONGO_URI = `mongodb+srv://Admin:2LCZszyX36dnuiCW@cluster0.qjvzzgp.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI);

app.get("/test", (req: Request, res: Response) => {
  res.json("Test okay");
});

app.post("/register", (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    emailConfirm,
    password,
    passwordConfirm,
  } = req.body;
  res.json({
    firstName,
    lastName,
    email,
    emailConfirm,
    password,
    passwordConfirm,
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

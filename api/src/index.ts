import express, { Express, Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from "./models/User";
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

app.post("/register", async (req: Request, res: Response) => {
  try {
    let { firstName, lastName, email, password } = req.body;
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw new Error();
        }
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            throw new Error();
          }
          password = hash;
        });
      }),
    });
    res.json(newUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post(`login`, async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userToLogin = await User.findOne({ email });
    if (!userToLogin) {
      return `User does not exist`;
    } else {
    }
  } catch (error) {}
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

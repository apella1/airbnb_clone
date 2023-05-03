"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("./models/User");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: true,
}));
app.use(express_1.default.json());
// the secret keys should not be pushed to public repos
const MONGO_URI = `mongodb+srv://Admin:2LCZszyX36dnuiCW@cluster0.qjvzzgp.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default.connect(MONGO_URI);
app.get("/test", (req, res) => {
    res.json("Test okay");
});
app.post("/register", async (req, res) => {
    try {
        let { firstName, lastName, email, password } = req.body;
        const newUser = await User_1.User.create({
            firstName,
            lastName,
            email,
            password: bcrypt_1.default.genSalt(10, (err, salt) => {
                if (err) {
                    throw new Error();
                }
                bcrypt_1.default.hash(password, salt, (err, hash) => {
                    if (err) {
                        throw new Error();
                    }
                    password = hash;
                });
            }),
        });
        res.json(newUser);
    }
    catch (error) {
        res.status(422).json(error);
    }
});
app.post(`login`, async (req, res) => {
    const { email, password } = req.body;
    try {
        const userToLogin = await User_1.User.findOne({ email });
        if (!userToLogin) {
            return `User does not exist`;
        }
        else {
        }
    }
    catch (error) { }
});
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
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
app.post("/register", (req, res) => {
    const { firstName, lastName, email, emailConfirm, password, passwordConfirm, } = req.body;
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

import db from "/queries.js";
import bodyParser from "body-parser";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
//import { createUser } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Handle login
app.post("/login", (req, res) => {
    // Here you would handle the login logic
    const { username, password } = req.body;

    // Example validation (Replace with your actual authentication logic)
    if (username === "admin" && password === "password") {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "Invalid username or password" });
    }
});

app.get("/create-user", (req, res) => {
    res.sendFile(__dirname + "../views/create-user.html");
});

// Serve the login page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "../views/login.html");
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
});
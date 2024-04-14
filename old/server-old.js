import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { createUser } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

// Serve the login page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

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

// Serve static files (like login.js)
app.use(express.static(path.join(__dirname)));

// Handle user creation
app.get("/create-user", (req, res) => {
    res.sendFile(__dirname + "/create-user.html");
});

app.post('/create-user', (req, res) => {
    const { username, email, password, familyId } = req.body;
    console.log(req.body)
    console.log(username, email, password,  familyId);
    try {
        const rowCount = createUser(username, email, password, familyId);
        if (rowCount === 1) {
            res.status(201).send("User created successfully!");
        } else {
            res.status(500).send("Error creating user");
        }
    } catch (err) {
        res.status(500).send("Error creating user");
    }
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

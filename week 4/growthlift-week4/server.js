const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Custom Logging Middleware (logs method and requested URL)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Basic GET route
app.get("/", (req, res) => {
    res.send("Welcome to GrowthLift API");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About route");
});

// API response route
app.get("/api/interns", (req, res) => {
    res.json({ interns: ["Ali", "Sara", "Bilal"] });
});

// Route Parameter (:id)
app.get("/api/interns/:id", (req, res) => {
    res.json({ id: req.params.id, name: "Sample Intern" });
});

// Query Parameter (?q=value)
app.get("/api/search", (req, res) => {
    res.json({ query: req.query.q });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
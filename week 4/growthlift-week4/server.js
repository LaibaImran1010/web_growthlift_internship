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

// Sample In-Memory Interns Data Store
let interns = [
    { id: 1, name: "Ali", role: "Frontend Developer" },
    { id: 2, name: "Sara", role: "Backend Developer" },
    { id: 3, name: "Bilal", role: "Full Stack Developer" }
];

// Basic GET route
app.get("/", (req, res) => {
    res.send("Welcome to GrowthLift API");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About route");
});

// Query Parameter Route (?q=value)
app.get("/api/search", (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.json({ message: "No search query provided", results: [] });
    }
    const filteredInterns = interns.filter(i => 
        i.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json({ query: query, results: filteredInterns });
});

// ----------------------------------------------------
// FULL CRUD ROUTES FOR INTERNS
// ----------------------------------------------------

// 1. GET ALL (READ)
app.get("/api/interns", (req, res) => {
    res.json({ success: true, count: interns.length, data: interns });
});

// 2. GET BY ID (READ)
app.get("/api/interns/:id", (req, res) => {
    const internId = parseInt(req.params.id);
    const intern = interns.find(i => i.id === internId);

    if (!intern) {
        return res.status(404).json({ success: false, message: "Intern not found" });
    }

    res.json({ success: true, data: intern });
});

// 3. POST (CREATE)
app.post("/api/interns", (req, res) => {
    const { name, role } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide an intern name" });
    }

    const newIntern = {
        id: interns.length > 0 ? interns[interns.length - 1].id + 1 : 1,
        name,
        role: role || "Intern"
    };

    interns.push(newIntern);
    res.status(201).json({ success: true, data: newIntern });
});

// 4. PUT (UPDATE)
app.put("/api/interns/:id", (req, res) => {
    const internId = parseInt(req.params.id);
    const intern = interns.find(i => i.id === internId);

    if (!intern) {
        return res.status(404).json({ success: false, message: "Intern not found" });
    }

    const { name, role } = req.body;
    if (name) intern.name = name;
    if (role) intern.role = role;

    res.json({ success: true, data: intern });
});

// 5. DELETE (DELETE)
app.delete("/api/interns/:id", (req, res) => {
    const internId = parseInt(req.params.id);
    const index = interns.findIndex(i => i.id === internId);

    if (index === -1) {
        return res.status(404).json({ success: false, message: "Intern not found" });
    }

    interns.splice(index, 1);
    res.json({ success: true, message: `Intern with ID ${internId} deleted` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
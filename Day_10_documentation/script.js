// ==========================================================================
// GROWTHLIFT INTERNSHIP: WEEK 2 DAY 10 - JAVASCRIPT FUNDAMENTALS
// ==========================================================================

// 1. VARIABLES (let vs const)
const studentName = "Laiba Imran"; // Cannot be reassigned
let currentWeek = 2;              // Can be reassigned later
console.log("--- Variables initialized ---");
console.log("Student Name:", studentName);
console.log("Current Internship Week:", currentWeek);

// 2. DATA TYPES
let projectRole = "Aspiring Software Engineer"; // String
let completedTasks = 9;                       // Number
let isDay10Complete = false;                  // Boolean
let techSkills = ["Python", "JavaScript", "HTML5", "CSS3", "OpenCV"]; // Array

// Object representing a specific project
let featuredProject = {
    title: "Nova Pay",
    category: "Fintech",
    isResponsive: true
};

console.log("\n--- Core Data Types ---");
console.log("Skills Array:", techSkills);
console.log("Project Object:", featuredProject);

// 3. FUNCTIONS (Regular vs Arrow)
// Regular Function
function calculateRemainingWeeks(totalWeeks, completed) {
    return totalWeeks - completed;
}

// Arrow Function (Modern, concise syntax)
const greetIntern = (name) => `Welcome back to work, ${name}!`; 

console.log("\n--- Functions Execution ---");
console.log(greetIntern(studentName));
console.log("Weeks remaining in internship:", calculateRemainingWeeks(6, currentWeek));

// 4. LOOPS (Iterating over your skills array)
console.log("\n--- Loops (Iterating Skills) ---");
techSkills.forEach((skill, index) => {
    console.log(`Skill ${index + 1}: ${skill}`);
});

// 5. CONDITIONALS & TEMPLATE LITERALS
console.log("\n--- Conditionals & String Templates ---");
if (completedTasks >= 10) {
    isDay10Complete = true;
    console.log(`Status update: ${studentName} has passed Day 10 milestones!`);
} else {
    console.log(`Status update: Keep pushing, ${studentName}! You have completed ${completedTasks} tasks.`);
}


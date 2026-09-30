// ==========================================
// TASK 1 — VARIABLES & DATA TYPES
// ==========================================

let firstName = "Etiusen";
const lastName = "Thomas";
const age = 24;
const studentId = "STU-00123";
const gpa = 4.75;
const isEnrolled = true;
const graduationDate = null;

// Log all variables with labels
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

// Reassign the value of firstName to a nickname
firstName = "ET";

// Log the updated firstName
console.log("Updated First Name:", firstName);


// ==========================================
// TASK 2 — OPERATORS
// ==========================================

let totalScore = 0;

console.log("Starting Score:", totalScore);

//Add First Score
totalScore += 45;
console.log("After First Test:", totalScore);

//Add Second Score
totalScore += 30;
console.log("After Second Test:", totalScore);

//Deduct 5 Marks due to an error
totalScore -= 5;
console.log("After Deduction:", totalScore);

// Double the Score for the bonus round
totalScore *= 2;
console.log("After Bonus Round:", totalScore);

// Added 1 point using the increment operator
totalScore++;
console.log("After Increment:", totalScore);

// Find the remainder when totalScore is divided by 7
console.log("Remainder when divided by 7:", totalScore % 7);


// ==========================================
// TASK 3 — TYPE CONVERSION
// ==========================================

// ==========================================
// TASK 3 — TYPE CONVERSION
// ==========================================

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// Convert the age string to a whole number because the student's age should not contain decimals.
studentAge = parseInt(studentAge);

console.log("Student Age:", studentAge);
console.log("Student Age Type:", typeof studentAge);

// Convert the exam score string to a decimal number because exam scores can contain decimal values.
examScore = parseFloat(examScore);

console.log("Exam Score:", examScore);
console.log("Exam Score Type:", typeof examScore);

// Convert the pass mark string to a number using Number() because the value represents a numeric mark.
passMark = Number(passMark);

console.log("Pass Mark:", passMark);
console.log("Pass Mark Type:", typeof passMark);

// Convert the student name value to a string because the assignment requires the final value to be a string.
studentName = String(studentName);

console.log("Student Name:", studentName);
console.log("Student Name Type:", typeof studentName);

// Check if the exam score is greater than the pass mark
console.log("Exam Score Greater Than Pass Mark:", examScore > passMark);

// ==========================================
// TASK 4 — CONDITIONAL STATEMENTS
// ==========================================

// Test 1
let score = 70;

if (score >= 70){
    console.log("Score:", score + "| Grade: A — Distinction");
} else if (score >= 60){
    console.log("Score:", score + "| Grade: B — Merit");
} else if (score >= 50){
    console.log("Score:", score + "| Grade: C — Pass");
} else if (score >= 40){
    console.log("Score:", score + "| Grade: D — Near Pass");
} else {
    console.log("Score:", score + "| Grade: F — Fail");
}
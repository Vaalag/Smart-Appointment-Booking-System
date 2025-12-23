const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary data storage
let appointments = [];

// POST API - save appointment
app.post("/api/appointments", (req, res) => {
  appointments.push(req.body);
  res.json({ message: "Appointment booked successfully" });
});

// GET API - fetch appointments
app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

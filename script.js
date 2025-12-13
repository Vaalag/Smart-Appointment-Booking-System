// ===== APPOINTMENT FORM SUBMIT =====
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const doctor = document.getElementById("doctor").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const problem = document.getElementById("problem").value;

            // Validation
            if (name === "" || age === "" || doctor === "" || date === "" || time === "") {
                alert("Please fill all required fields!");
                return;
            }

            // Create appointment object
            const appointment = {
                name,
                age,
                doctor,
                date,
                time,
                problem
            };

            // Get existing appointments
            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

            // Add new appointment
            appointments.push(appointment);

            // Save back to localStorage
            localStorage.setItem("appointments", JSON.stringify(appointments));

            // Success message
            alert("Appointment Booked Successfully!");

            // Reset form
            form.reset();
        });
    }

    // ===== ADMIN PAGE DISPLAY =====
    const tableBody = document.getElementById("appointmentTable");

    if (tableBody) {
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

        appointments.forEach(function (app) {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${app.name}</td>
                <td>${app.age}</td>
                <td>${app.doctor}</td>
                <td>${app.date}</td>
                <td>${app.time}</td>
                <td>${app.problem}</td>
            `;

            tableBody.appendChild(row);
        });
    }
});

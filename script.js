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
 /* ================= CHATBOT ================= */

    const chatbotBtn = document.getElementById("chatbotBtn");
    const chatbotBox = document.getElementById("chatbotBox");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendBtn");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatbotMessages");

    if (chatbotBtn && chatbotBox) {

        chatbotBtn.addEventListener("click", function () {
            chatbotBox.style.display = "block";
        });

        closeChat.addEventListener("click", function () {
            chatbotBox.style.display = "none";
        });

        sendBtn.addEventListener("click", function () {
            let msg = chatInput.value.trim();
            if (msg === "") return;

            chatMessages.innerHTML += `<p><b>You:</b> ${msg}</p>`;

            let reply = "Please visit the Appointment page for booking.";

            if (msg.toLowerCase().includes("hello"))
                reply = "Hello! How can I help you?";
            else if (msg.toLowerCase().includes("appointment"))
                reply = "You can book an appointment from the Book Appointment page.";
            else if (msg.toLowerCase().includes("doctor"))
                reply = "Check Doctors page to see available doctors.";

            chatMessages.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

});



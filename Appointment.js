import { useState } from "react";

function Appointment() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    doctor: "",
    date: "",
    time: "",
    problem: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data.push(form);
    localStorage.setItem("appointments", JSON.stringify(data));
    alert("Appointment Booked!");
    setForm({ name:"", age:"", doctor:"", date:"", time:"", problem:"" });
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
      <input name="doctor" value={form.doctor} onChange={handleChange} placeholder="Doctor" />
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input type="time" name="time" value={form.time} onChange={handleChange} />
      <textarea name="problem" value={form.problem} onChange={handleChange}></textarea>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Appointment;

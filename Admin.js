function Admin() {
  const data = JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div>
      <h2>Admin Panel</h2>
      <table border="1">
        <tr>
          <th>Name</th><th>Age</th><th>Doctor</th>
          <th>Date</th><th>Time</th><th>Problem</th>
        </tr>
        {data.map((a, i) => (
          <tr key={i}>
            <td>{a.name}</td>
            <td>{a.age}</td>
            <td>{a.doctor}</td>
            <td>{a.date}</td>
            <td>{a.time}</td>
            <td>{a.problem}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Admin;

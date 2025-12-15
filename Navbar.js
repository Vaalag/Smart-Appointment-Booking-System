import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/appointment">Book Appointment</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;

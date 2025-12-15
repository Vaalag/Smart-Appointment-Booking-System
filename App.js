import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Admin from "./components/Admin";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;


import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <div>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>

          <Routes>
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>

          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>

          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

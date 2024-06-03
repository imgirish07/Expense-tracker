import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpensePage from "./components/ExpensePage";
import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";
import AddExpense from "./components/AddExpense";

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
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>

          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>

          <Routes>
            <Route path="/expensepage" element={<ExpensePage />} />
          </Routes>

          <Routes>
            <Route path="/addexpense" element={<AddExpense />} />
          </Routes>

          <Routes>
            <Route path="/history" element={<History />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

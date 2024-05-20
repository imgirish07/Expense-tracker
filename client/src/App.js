import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpensePage from "./components/ExpensePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

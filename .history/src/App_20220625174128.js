import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/contact_page" element={
          <div>
            <nav className="navbar">
              <div class></div>
            </nav>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

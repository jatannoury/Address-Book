import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import Table from "./components/Table";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route
          path="/contact_page"
          element={
            <div>
              <Navbar />
              <
              
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

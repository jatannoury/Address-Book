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
              <div className="addressBook">Ad</div>
              <div className="sub_nav"><a href="#">Display contacts</a></div>
              <div className="sub_nav"><a href="#">Add contacts</a></div>
            </nav>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

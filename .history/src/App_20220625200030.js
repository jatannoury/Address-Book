import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { AiOutlineUser } from "react-icons/ai";
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
              {/* <div className="header">
                <div className="sub_header">Full Name</div>
                <div className="sub_header">Phone Number</div>
                <div className="sub_header">Email</div>
                <div className="sub_header">Date Of Creation</div>
              </div> */}
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <AiOutlineUser className="iconn" />
                    <td>fdsaf</td>
                    <td>fdsaf</td>
                    <td>fdsaf</td>
                    <td>fdsaf</td>
                    <th className="del">Delete</th>
                  </tr>
                                    
                </tbody>
              </table>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

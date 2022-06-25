import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/register' element={<h1>HELLO</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

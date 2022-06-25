import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/Admin_login" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

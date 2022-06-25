import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLanding />}></Route>
        <Route path="/survey_page" element={<Survey />}></Route>
        <Route path="/Admin_login" element={<Admin />}></Route>
        <Route path="/Admin_page" element={<AdminPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

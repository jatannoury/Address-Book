import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLanding />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

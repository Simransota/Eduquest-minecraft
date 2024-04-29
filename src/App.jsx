import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup.jsx/Signup.jsx"; // Corrected import path
import Login from "./pages/Login.jsx/Login.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

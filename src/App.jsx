import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup.jsx/Signup.jsx";
import Sparkles from "./components/Sparkles.jsx"; // Corrected import path
import Login from "./pages/Login.jsx/Login.jsx";
import Quiz from "./pages/DashBoard/Quiz.jsx"
import DashBoard from "./pages/DashBoard/DashBoard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="sparkles" element={<Sparkles />} />
        <Route path="login" element={<Login />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
    // <DashBoard/>
  );
}

export default App;

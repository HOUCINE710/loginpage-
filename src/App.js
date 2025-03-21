import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm"; 
import Container1 from "./components/Container1";
import PromoSection from "./components/PromoSection"; 
import Container2 from "./components/Container2";
import ResetPassword from "./components/formforgetpassword";



function App() {
  return (
    <Router>
      <main
        className="q-page min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden"
        style={{ minHeight: 560 }}
      >
        {/* Background Shapes */}
       

        {/* Router Pages */}
     
          <Routes>
            <Route path="/regester" element={<Container2/>} />
            <Route path="/login" element={<Container1 />} />
            <Route path="/forgetpasword" element={<ResetPassword />} />
          </Routes>
  
      </main>
    </Router>
  );
}

export default App;

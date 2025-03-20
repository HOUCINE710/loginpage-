import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import FloatingIcons from "./components/FloatingIcons";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm"; // إنشاء هذه الصفحة لاحقًا
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <main className="q-page min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden" style={{ minHeight: 560 }}>
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-50"></div>
          <FloatingIcons />
        </div>

        {/* Router Pages */}
        <Container>
          <Routes>
            <Route path="/" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Container>

      </main>
    </Router>
  );
}

export default App;

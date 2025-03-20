import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden p-8">
      <h2 className="text-2xl font-bold text-indigo-800 text-center">Welcome Back! 🔑</h2>
      <p className="text-indigo-600 mt-2 text-center">Sign in to your account</p>

      <form className="space-y-6 mt-6">
        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">📧</span>
          <input className="w-full pl-10 p-3 border rounded-lg" id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">🔒</span>
          <input className="w-full pl-10 p-3 border rounded-lg" id="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>

        <button type="submit" className="w-full p-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all">
          Sign In
        </button>

        <p className="text-center text-gray-600">
          Don't have an account? <Link to="/" className="text-indigo-600 font-bold">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

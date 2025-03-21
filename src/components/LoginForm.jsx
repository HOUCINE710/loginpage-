import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors({ ...errors, [e.target.id]: e.target.value.trim() === "" });
  };

  // التحقق مما إذا كانت الحقول فارغة لتعطيل الزر
  const isDisabled = formData.email.trim() === "" || formData.password.trim() === "";

  return (
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden p-8">
      <h2 className="text-2xl font-bold text-indigo-800 text-center">Welcome Back! 🔑</h2>
      <p className="text-indigo-600 mt-2 text-center">Sign in to your account</p>

      <form className="space-y-6 mt-6">
        {/* حقل البريد الإلكتروني */}
        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">📧</span>
          <input
            className={`w-full pl-10 p-3 border-2 rounded-lg focus:outline-none transition-all duration-300 
              ${errors.email ? "border-red-500" : "border-gray-300 focus:border-indigo-600 focus:shadow-lg"}`}
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Email is required!</p>}
        </div>

        {/* حقل كلمة المرور */}
        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">🔒</span>
          <input
            className={`w-full pl-10 p-3 border-2 rounded-lg focus:outline-none transition-all duration-300 
              ${errors.password ? "border-red-500" : "border-gray-300 focus:border-indigo-600 focus:shadow-lg"}`}
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">Password is required!</p>}
        </div>

        {/* زر تسجيل الدخول */}
        <button
  type="submit"
  className={`w-full p-3 rounded-lg font-medium text-white transition-all 
    ${isDisabled ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
  disabled={isDisabled}
>
  Sign In
</button>

        {/* خط مع "or" */}
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* زر تسجيل الدخول بجوجل */}
        <button className="w-full flex items-center justify-center gap-2 p-3 border-2 border-gray-300 rounded-lg transition-all hover:bg-gray-100">
          <i className="fa-brands fa-google text-red-500"></i>
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>
        
          {/* زر إعادة تعيين كلمة المرور */}
          <div className="text-center">
            <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-600/80 transition-colors">
             <Link to="/forgetpasword" className="text-indigo-600 font-bold">  Reset Password</Link>
            </a>
          </div>
        <p className="text-center text-gray-600">
          Don't have an account? <Link to="/regester" className="text-indigo-600 font-bold">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    if (!email.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
        {/* العنوان مع الخط السفلي */}
        <h2 className="text-xl font-bold text-center mb-2">Reset your password</h2>
        <hr className="mb-4 border-gray-300" />

        {/* نموذج إدخال البريد الإلكتروني */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              required
              className={`w-full p-2 border rounded mt-1 transition outline-none ${
                isFocused
                  ? "border-indigo-600"
                  : error
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {error && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          {/* زر إعادة التعيين */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
          >
            Reset Password
          </button>
        </form>

        {/* نص "Don't have an account?" */}
        <div className="text-center text-gray-600 mt-4">Don't have an account?</div>

        {/* زر التسجيل بتصميم عريض */}
        <div className="text-center mt-2">
          <Link
            to="/register"
            className="w-full inline-block border border-black text-black px-4 py-2 rounded bg-white hover:bg-gray-100 transition text-center"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate(); // ملاحظة: يجب استخدام هذا داخل `function`

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    formData.termsAccepted;

  return (
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden p-8">
      <h2 className="text-2xl font-bold text-indigo-800 text-center">Create Account 🎉</h2>
      <p className="text-indigo-600 mt-2 text-center">Join the largest digital store in Algeria</p>

      <form className="space-y-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <span className="absolute left-3 top-3 text-lg opacity-70">👤</span>
            <input className="w-full pl-10 p-3 border rounded-lg" id="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="relative w-full">
            <span className="absolute left-3 top-3 text-lg opacity-70">👤</span>
            <input className="w-full pl-10 p-3 border rounded-lg" id="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">📧</span>
          <input className="w-full pl-10 p-3 border rounded-lg" id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">📱</span>
          <input className="w-full pl-10 p-3 border rounded-lg" id="phone" type="tel" placeholder="+213 _ __ __ __ __" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">🔒</span>
          <input className="w-full pl-10 p-3 border rounded-lg" id="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="relative w-full">
          <span className="absolute left-3 top-3 text-lg opacity-70">🔒</span>
          <input className="w-full pl-10 p-3 border rounded-lg" id="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="termsAccepted" className="peer hidden" checked={formData.termsAccepted} onChange={handleChange} />
            <label htmlFor="termsAccepted" className="w-6 h-6 border-2 border-gray-400 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 peer-checked:bg-[rgb(90,71,251)] peer-checked:border-transparent">
              <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </label>
            <span className="text-sm text-gray-600">
              I have read and agree to <button type="button" className="font-medium text-[rgb(90,71,251)] hover:opacity-80 transition-opacity">terms and conditions</button>
            </span>
          </div>
        </div>

        {/* إضافة الخطين مع "or" في الوسط */}
        <div className="relative flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 bg-white text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

       
{/* زر إنشاء الحساب */}
<button
  type="submit"
  disabled={!isFormValid}
  className={`w-full p-3 text-white font-medium rounded-lg transition-all ${
    isFormValid ? "bg-indigo-600 hover:bg-indigo-700" : "cursor-not-allowed"
  }`}
  style={!isFormValid ? { backgroundColor: "rgb(90 71 251 / 69%)" } : {}}
>
  Create Account
</button>

{/* زر تسجيل الدخول بواسطة Google */}
<button
  type="button"
  className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-100 transition-all cursor-pointer"
>
  <span className="q-btn__content text-center col items-center q-anchor--skip justify-center row">
    <i className="q-icon on-left fa-brands fa-google" aria-hidden="true" role="img"></i>
    <span className="block">Sign up with Google</span>
  </span>
</button>

{/* زر تسجيل الدخول إذا كان لديك حساب مسبقًا */}
<button
      onClick={() => navigate("/login")}
      className="w-full block text-center bg-indigo-600 text-white font-bold text-lg py-4 hover:bg-indigo-700 transition-all duration-300"
    >
      Already have an account? <Link to="/login" className="font-bold">Login 🔑</Link>
    </button>

      </form>
      
    </div>
  );
};

export default SignupForm;

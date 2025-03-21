import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignupForm = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const errorMessages = {
    firstName: "Name is required.",
    lastName: "Name is required.",
    email: "Email is required.",
    phone: "Phone number is required.",
    password: "Password is required.",
    confirmPassword: "Please confirm your password.",
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() === "" ? errorMessages[id] : "",
    }));
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
    <div className="relative bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden">
      <div  className="p-8" >
      <h2 className="text-2xl font-bold text-indigo-800 text-center">
        Create Account 🎉
      </h2>
      <p className="text-indigo-600 mt-2 text-center">
        Join the largest digital store in Algeria
      </p>

      <form className="space-y-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "firstName", placeholder: "First Name", icon: "👤" },
            { id: "lastName", placeholder: "Last Name", icon: "👤" },
          ].map(({ id, placeholder, icon }) => (
            <div key={id} className="relative w-full">
              <span className="absolute left-3 top-3 text-lg opacity-70">
                {icon}
              </span>
              <input
                className={`w-full pl-10 p-3 border rounded-lg outline-none transition-all duration-300 ${
                  errors[id]
                    ? "border-red-500"
                    : "border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                }`}
                id={id}
                type="text"
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors[id] && (
                <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
              )}
            </div>
          ))}
        </div>

        {[
          { id: "email", type: "text", placeholder: "Email", icon: "📧" },
          { id: "phone", type: "text", placeholder: "Phone", icon: "📱" },
          { id: "password", type: "password", placeholder: "Password", icon: "🔒" },
          { id: "confirmPassword", type: "password", placeholder: "Confirm Password", icon: "🔒" },
        ].map(({ id, type, placeholder, icon }) => (
          <div key={id} className="relative w-full">
            <span className="absolute left-3 top-3 text-lg opacity-70">
              {icon}
            </span>
            <input
              className={`w-full pl-10 p-3 border rounded-lg outline-none transition-all duration-300 ${
                errors[id]
                  ? "border-red-500"
                  : "border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
              }`}
              id={id}
              type={type}
              placeholder={placeholder}
              value={formData[id]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors[id] && (
              <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
            )}
          </div>
        ))}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="termsAccepted"
            className="peer hidden"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label
            htmlFor="termsAccepted"
            className="relative w-6 h-6 border-2 border-gray-400 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 peer-checked:bg-indigo-600 peer-checked:border-transparent"
          >
            <svg
              className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          </label>
          <span className="text-sm text-gray-600">
            I have read and agree to{" "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:opacity-80"
            >
              terms and conditions
            </button>
          </span>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-3 text-white font-medium rounded-lg transition-all ${
            isFormValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-indigo-400 cursor-not-allowed"
          }`}
        >
          Create Account
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
     
      
      </form>
      </div>
      <button
         
         className="w-full block text-center bg-indigo-600 font-bold text-lg py-4 transition-all duration-300"
       >
        <Link to="/login" className=" font-bold text-white"> Already have an account?{" "}Login 🔑 </Link>
       </button>
    </div>
  );
};

export default SignupForm;

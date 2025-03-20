// src/components/FloatingIcons.jsx
import React from "react";

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <i className="lucide-gamepad-2 text-6xl absolute top-20 left-[20%] opacity-30 text-indigo-400"></i>
      <i className="lucide-gift text-6xl absolute top-40 right-[25%] opacity-30 text-indigo-400"></i>
      <i className="lucide-smartphone text-6xl absolute bottom-32 left-[30%] opacity-30 text-indigo-400"></i>
      <i className="lucide-credit-card text-6xl absolute bottom-40 right-[20%] opacity-30 text-indigo-400"></i>
    </div>
  );
};

export default FloatingIcons;

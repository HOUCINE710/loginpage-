const PromoSection1 = () => {
  return (
    <div className="flex-1 text-center lg:text-left flex flex-col justify-center relative">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[rgb(90,71,251)] inline-flex items-center whitespace-nowrap">
        Odigix Store ✨
      </h1>
      
      {/* الفقرة التوضيحية */}
      <p className="text-xl lg:text-2xl text-[rgb(90,71,251)] mb-6 inline-flex items-center whitespace-nowrap">
        Your #1 Digital Store in Algeria 🇩🇿
      </p>

      {/* البطاقات */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20 ">
          <i className="lucide-zap text-2xl mb-3 text-yellow-500"></i>
          <h3 className="font-bold text-indigo-700 text-sm">Instant Delivery ⚡</h3>
          <p className="text-sm text-indigo-500 mt-2">Automatic & instant product delivery</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-credit-card text-2xl mb-3 text-indigo-500"></i>
          <h3 className="font-bold text-indigo-800 text-sm">Local Payment 💳</h3>
          <p className="text-sm text-indigo-600 mt-2">CIB & Eddahabia accepted</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-gamepad-2 text-2xl mb-3 text-indigo-500"></i>
          <h3 className="font-bold text-indigo-800 text-sm">Game Recharges 🎮</h3>
          <p className="text-sm text-indigo-600 mt-2">Top up your favorite games</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-gift text-2xl mb-3 text-pink-500"></i>
          <h3 className="font-bold text-indigo-800 text-sm">Gift Cards 🎁</h3>
          <p className="text-sm text-indigo-600 mt-2">Wide selection of gift cards</p>
        </div>
      </div>
    </div>
  );
};

export default PromoSection1;
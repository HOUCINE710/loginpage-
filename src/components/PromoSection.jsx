const PromoSection = () => {
  return (
    <div className="flex-1 text-center lg:text-left flex flex-col justify-center relative">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[rgb(90,71,251)] inline-flex items-center whitespace-nowrap">
        Join Odigix Today ✨
      </h1>
      
      {/* الفقرة التوضيحية */}
      <p className="text-xl lg:text-2xl text-[rgb(90,71,251)] mb-6 inline-flex items-center whitespace-nowrap">
        Get instant access to digital products 🚀
      </p>

      {/* البطاقات */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-shield-check text-2xl mb-3 text-green-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">Secure Payment 🔒</h3>
          <p className="text-base text-indigo-600 mt-2">Safe transactions with local banks</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-history text-2xl mb-3 text-indigo-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">Order History 📋</h3>
          <p className="text-base text-indigo-600 mt-2">Track all your purchases</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-badge-percent text-2xl mb-3 text-yellow-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">Special Offers 🎯</h3>
          <p className="text-base text-indigo-600 mt-2">Access to exclusive deals</p>
        </div>

        <div className="bg-white/80 p-6 rounded-xl min-h-[160px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg hover:z-20">
          <i className="lucide-headphones text-2xl mb-3 text-pink-500"></i>
          <h3 className="font-bold text-indigo-800 text-lg">24/7 Support 🎧</h3>
          <p className="text-base text-indigo-600 mt-2">Always here to help you</p>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;

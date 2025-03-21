import PromoSection1 from "./PromoSection1"; // استيراد المكون الجديد
import LoginForm from "./LoginForm";

const Container = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto p-8">

        
      {/* نموذج التسجيل */}
      <div >
      <PromoSection1 />
      </div>
      {/* القسم الترويجي */}
      <div className="w-full max-w-lg">
      <LoginForm />
      </div>
    
    </div>
  );
};

export default Container;

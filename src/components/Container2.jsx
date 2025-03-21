import PromoSection from "./PromoSection"; // استيراد المكون الجديد
import SignupForm from "./SignupForm";

const Container = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto p-8">

        
      {/* نموذج التسجيل */}
      <div className="w-full max-w-lg">
      <SignupForm />
      </div>
      {/* القسم الترويجي */}
      <PromoSection />

    </div>
  );
};

export default Container;

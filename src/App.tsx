import "./App.css";
import AppSection from "./components/AppSection/AppSection";
import CardsSection from "./components/CardsSection/CardsSection";
import CategorySession from "./components/CategorySession/CategorySession";
import FooterSection from "./components/FooterSection/FooterSection";
import FormSection from "./components/FormSection/FormSection";
import Separator from "./components/Separator";

function App() {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="px-6 sm:px-20">
        {/* <ProductsSection />
        <SimpleGallerySection /> */}
        <AppSection />
        <CategorySession />
        <CardsSection />
      </div>
      <div className="bg-[#2D2D2D]">
        <FormSection />
        <div className="px-20">
          <Separator />
        </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;

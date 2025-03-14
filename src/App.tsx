import "./App.css";
import AppSection from "./components/AppSection/AppSection";
import CardsSection from "./components/CardsSection/CardsSection";
import CategorySession from "./components/CategorySession/CategorySession";
import FooterSection from "./components/FooterSection/FooterSection";
import FormSection from "./components/FormSection/FormSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Separator from "./components/Separator";
import SimpleGallerySection from "./components/SimpleGallerySection/SimpleGallerySection";

function App() {
  return (
    <>
      <HeroSection />
      <div className="px-6 sm:px-20">
        <ProductsSection />
        <SimpleGallerySection />
        <AppSection />
        <CategorySession />
        <CardsSection />
      </div>
      <div className="bg-[#2D2D2D]">
        <FormSection />
        <div className="px-6 sm:px-20">
          <Separator />
        </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;

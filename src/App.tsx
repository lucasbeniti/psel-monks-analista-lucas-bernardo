import "./App.css";
import InfoBox from "./components/AppSection/AppSection";
import Cards from "./components/CardSection/CardsSection";
import CategorySession from "./components/CategorySession/CategorySession";
import Footer from "./components/FooterSection/FooterSection";
import Form from "./components/FormSection/FormSection";
import Hero from "./components/HeroSection/HeroSection";
import Products from "./components/ProductsSection/ProductsSession";
import Separator from "./components/Separator";
import SimpleGallery from "./components/SimpleGallerySection/SimpleGallerySection";

function App() {
  return (
    <>
      <Hero />
      <div className="px-20">
        <Products />
        <SimpleGallery />
        <InfoBox />
        <CategorySession />
        <Cards />
      </div>
      <div className="bg-[#2D2D2D]">
        <Form />
        <div className="px-20">
          <Separator />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

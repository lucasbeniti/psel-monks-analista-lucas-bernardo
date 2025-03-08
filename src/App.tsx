import "./App.css";
import InfoBox from "./components/AppSection/InfoBox";
import Cards from "./components/CardSection/Cards";
import CategorySession from "./components/CategorySession/CategorySession";
import Footer from "./components/FooterSection/Footer";
import Form from "./components/FormSection/Form";
import Hero from "./components/HeroSection/Hero";
import Products from "./components/ProductsSection/Products";
import Separator from "./components/Separator";
import SimpleGallery from "./components/SimpleGallerySection/SimpleGallery";

function App() {
  return (
    <>
      <Hero />
      <Products />
      <SimpleGallery />
      <div className="px-20">
        <InfoBox />
      </div>
      <div className="px-20">
        <CategorySession />
      </div>
      <Cards />
      <Form />
      <Separator />
      <Footer />
    </>
  );
}

export default App;

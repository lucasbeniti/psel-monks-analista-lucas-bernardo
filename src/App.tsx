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
      <div className="px-20">
        <Products />
        <SimpleGallery />
        <InfoBox />
        <CategorySession />
        <Cards />
      </div>
      <Form />
      <div className="px-20">
        <Separator />
      </div>
      <Footer />
    </>
  );
}

export default App;

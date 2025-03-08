import "./App.css";
import InfoBox from "./components/AppSection/InfoBox";
import Cards from "./components/CardSection/Cards";
import CategorySession from "./components/CategorySession/CategorySession";
import Hero from "./components/HeroSection/Hero";
import Products from "./components/ProductsSection/Products";
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
    </>
  );
}

export default App;

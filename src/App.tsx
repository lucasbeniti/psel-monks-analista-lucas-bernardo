import "./App.css";
import InfoBox from "./components/AppSection/InfoBox";
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
    </>
  );
}

export default App;

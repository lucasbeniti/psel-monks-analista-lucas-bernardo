import "./App.css";
import CardsSection from "./components/CardsSection/CardsSection";
import CategorySession from "./components/CategorySession/CategorySession";

function App() {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="px-6 sm:px-20">
        {/* <ProductsSection />
        <SimpleGallerySection />
        <AppSection /> */}
        <CategorySession />
        <CardsSection />
      </div>
      {/* <div className="bg-[#2D2D2D]">
         <FormSection /> */}
      {/* <div className="px-20">
          {/* <Separator />
        </div>
        <FooterSection />
      </div> */}
    </>
  );
}

export default App;

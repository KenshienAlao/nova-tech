import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreBenefits from "@/components/StoreBenefits";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <StoreBenefits />
        {/* <Promotion /> */}
        {/* <ProductShowcase /> */}
        {/* <Newsletter /> */}
        {/* <Testimonials /> */}
        {/* <StoreInfo /> */}
        {/* <FAQ /> */}
        {/* <FinalCTA /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

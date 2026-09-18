import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreBenefits from "@/components/StoreBenefits";
import Promotion from "@/components/Promotion";
import ProductShowcase from "@/components/ProjectShowcase";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import StoreInfo from "@/components/StoreInfo";
import FAQ from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <StoreBenefits />
        <Promotion />
        <ProductShowcase />
        <Newsletter />
        <Testimonials />
        <StoreInfo />
        <FAQ />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

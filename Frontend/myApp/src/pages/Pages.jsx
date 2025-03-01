import Header from "../Components/header";
import Navigation from "../Components/Navigation/Navigation";
import Slider from "../Components/Slider/Slider";
import CategorySection from "../Components/CategorySection/CategorySection";
import FilterableProducts from "../Components/FilterableProducts/FilterableProducts";
import FreeShipping from "../Components/FreeShipping/FreeShipping";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer";
export default function Pages() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Slider></Slider>
      {/* <CategorySection></CategorySection>
      <FilterableProducts></FilterableProducts>
      <FreeShipping></FreeShipping>
      <Features></Features>
      <Footer></Footer> */}
    </div>
  );
}

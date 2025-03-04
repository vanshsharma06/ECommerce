import Header from "../Components/Header";
import Navigation from "../Components/Navigation/Navigation";
import Slider from "../Components/Slider/Slider";
import CategorySection from "../Components/CategorySection/CategorySection";
import FilterableProducts from "../Components/FilterableProducts/FilterableProducts";
import FreeShipping from "../Components/FreeShipping/FreeShipping";
import DealsSection from "../Components/DealsSection/DealsSection";
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer";
import ElectronicsPage from "../Components/ElectronicsPage/ElectronicsPage";
export default function Pages() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Slider></Slider>
      <CategorySection></CategorySection>
      <FilterableProducts></FilterableProducts>
      <FreeShipping></FreeShipping>
      <DealsSection></DealsSection>
      <ProductCarousel></ProductCarousel>
      <ElectronicsPage></ElectronicsPage>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

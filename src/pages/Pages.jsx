// import { useEffect } from "react";
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
import Groceries from "../Components/Groceries/Groceries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "../Components/ProductsPage/ProductsPage";
import AuthContainer from "../Components/AuthContainer/AuthContainer";
// import Cart from "../Components/Cart/Cart";
// import Wishlist from "../Components/Wishlist/Wishlist";
import HelpCenterPage from "../Components/HelpCenterPage/HelpCenterPage";
// import { ProductProvider } from "../Components/ProductProvider";

export default function Pages() {
  return (
    <Router>
      <div>
        {/* <ProductProvider /> */}
        <Header />
        <Navigation />
        <Routes>
          <Route path="/login" element={<AuthContainer isLogin={true} />} />
          <Route path="/register" element={<AuthContainer isLogin={false} />} />
          <Route path="/help-center" element={<HelpCenterPage />} />

          {/* New routes for cart and wishlist */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/wishlist" element={<Wishlist />} /> */}

          {/* Home page route with all components */}
          <Route
            path="/"
            element={
              <div className="home-content">
                <Slider />
                <CategorySection />
                <FilterableProducts />
                <FreeShipping />
                <DealsSection />
                <ProductCarousel />
                <ElectronicsPage />
                <Groceries />
                <Features />
              </div>
            }
          />

          {/* Products page route for category/subcategory */}
          <Route
            path="/products/:category/:subcategory"
            element={
              <>
                <ProductsPage />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

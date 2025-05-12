import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  // Main categories data
  const categories = [
    {
      name: "Fashion",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png",
      subcategories: [
        "Jeans",
        "Pants",
        "Shorts",
        "Shirts",
        "T-shirts",
        "Dresses",
        "Sarees",
        "Kurtas",
      ],
    },
    {
      name: "Electronics",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png",
      subcategories: [
        "Mobile Phones",
        "Laptops",
        "Headphones",
        "Speakers",
        "Tablets",
        "Cameras",
        "Smart Watches",
        "TVs",
      ],
    },
    {
      name: "Bags",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png",
      subcategories: [
        "Backpacks",
        "Handbags",
        "Sling Bags",
        "Wallets",
        "Luggage",
        "Laptop Bags",
        "Clutches",
        "Tote Bags",
      ],
    },
    {
      name: "Footwear",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png",
      subcategories: [
        "Sneakers",
        "Formal Shoes",
        "Casual Shoes",
        "Sandals",
        "Boots",
        "Sports Shoes",
        "Flip Flops",
        "Heels",
      ],
    },
    {
      name: "Groceries",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png",
      subcategories: [
        "Fruits",
        "Vegetables",
        "Dairy",
        "Snacks",
        "Beverages",
        "Staples",
        "Packaged Foods",
        "Organic",
      ],
    },
    {
      name: "Beauty",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png",
      subcategories: [
        "Makeup",
        "Skincare",
        "Haircare",
        "Fragrances",
        "Bath & Body",
        "Men's Grooming",
        "Appliances",
        "Wellness",
      ],
    },
    {
      name: "Wellness",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png",
      subcategories: [
        "Vitamins",
        "Supplements",
        "Ayurveda",
        "Healthcare Devices",
        "Fitness",
        "Personal Care",
        "Yoga",
        "Nutrition",
      ],
    },
    {
      name: "Jewellery",
      imageSrc:
        "https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png",
      subcategories: [
        "Earrings",
        "Necklaces",
        "Rings",
        "Bracelets",
        "Bangles",
        "Pendants",
        "Anklets",
        "Sets",
      ],
    },
  ];

  // Handle category click
  const handleCategoryClick = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null); // Close if already open
    } else {
      setActiveCategory(index); // Open the clicked category
    }
  };

  // Handle subcategory click
  const handleSubcategoryClick = (category, subcategory) => {
    // Navigate to the products page with category and subcategory as parameters
    navigate(
      `/products/${category.toLowerCase()}/${subcategory
        .toLowerCase()
        .replace(/ /g, "-")}`
    );
  };

  return (
    <div className="py-4 ">
      <div className="container mx-auto px-1 sm:px-3 lg:px-18">
        {/* Main Categories */}
        <div className="flex scrollbar-hide overflow-hidden py-1 px-1 sm:grid sm:grid-cols-8 sm:gap-3 md:grid-cols-8 gap-2 overflow-x-auto sm:overflow-visible no-scrollbar whitespace-nowrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-white p-2 sm:p-2 lg:p-3 rounded-[7px] shadow hover:shadow-lg transition min-w-[20%] sm:min-w-0 cursor-pointer ${
                activeCategory === index ? "ring-1 ring-blue-500" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              <img
                src={category.imageSrc || "/placeholder.svg"}
                alt={category.name}
                className="mx-auto px-1 sm:w-10 sm:h-10 lg:w-16 lg:h-16"
              />
              <p className="text-center mt-1 font-medium text-gray-700 text-[12px] sm:text-[12px] lg:text-[14px] sm:mt-2">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Subcategories */}
        {activeCategory !== null && (
          <div className="mt-4 bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              {categories[activeCategory].name} Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
              {categories[activeCategory].subcategories.map(
                (subcategory, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 hover:bg-gray-100 p-3 rounded-md text-center cursor-pointer transition-all duration-200 ease-in-out"
                    onClick={() =>
                      handleSubcategoryClick(
                        categories[activeCategory].name,
                        subcategory
                      )
                    }
                  >
                    <p className="text-gray-700 text-sm font-medium">
                      {subcategory}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySection;

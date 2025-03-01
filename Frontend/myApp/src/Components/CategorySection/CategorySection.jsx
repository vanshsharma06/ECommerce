const categories = [
  {
    name: "Fashion",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png",
  },
  {
    name: "Electronics",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png",
  },
  {
    name: "Bags",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png",
  },
  {
    name: "Footwear",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png",
  },
  {
    name: "Groceries",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png",
  },
  {
    name: "Beauty",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png",
  },
  {
    name: "Wellness",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png",
  },
  {
    name: "Jewellery",
    imageSrc:
      "https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png",
  },
];

const Categories = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-6 grid grid-cols-8 sm:grid-cols-8 sm:gap-3 md:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={category.imageSrc}
              alt={category.name}
              className="w-16 h-16 mx-auto"
            />
            <p className="text-center mt-2 font-medium text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

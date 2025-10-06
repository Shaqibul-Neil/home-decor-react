import { useState } from "react";
import NoSearchedProducts from "../Component/NoSearchedProducts";
import WishlistItem from "../Component/WishlistItem";
import WishlistChart from "../Component/WishlistChart";
import { loadWishList } from "../Utilities/localStorage";

const Wishlist = () => {
  const [wishLists, setWishLists] = useState(() => loadWishList());
  const [sortBy, setSortBy] = useState("");

  // useEffect(() => {
  //   const savedLists = JSON.parse(localStorage.getItem("wishlist"));
  //   if (savedLists) setWishLists(savedLists);
  // }, []);

  //sort by price
  const sortedProducts = [...wishLists].sort((a, b) => {
    if (!sortBy) return 0;
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
  });

  return (
    <div className="space-y-12 my-24 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          My Wishlist
          <span className="ml-4 text-sm text-gray-600 font-medium">
            {sortedProducts.length < 9
              ? `0${wishLists.length} `
              : `${wishLists.length} `}
            Products found
          </span>
        </h2>
        <label className="form-control max-w-xs w-full">
          <select
            className="bg-blue-300 border-gray-300 text-gray-800 font-semibold outline-none select focus:ring-0 focus:border-blue-500 transition-colors duration-200 rounded-lg"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option disabled value="">
              Sort By Price
            </option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {sortedProducts.length === 0 ? (
          <NoSearchedProducts />
        ) : (
          sortedProducts.map((wishList) => (
            <WishlistItem
              key={wishList.id}
              wishList={wishList}
              setWishLists={setWishLists}
            />
          ))
        )}
      </div>

      {/* chart */}
      <div>
        <WishlistChart sortedProducts={sortedProducts} />
      </div>
    </div>
  );
};

export default Wishlist;

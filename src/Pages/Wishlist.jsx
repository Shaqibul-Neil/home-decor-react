import { useEffect, useState } from "react";
import NoSearchedProducts from "../Component/NoSearchedProducts";
import WishlistItem from "../Component/WishlistItem";

const Wishlist = () => {
  const [wishLists, setWishLists] = useState([]);
  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("wishlist"));
    if (savedLists) setWishLists(savedLists);
  }, []);

  return (
    <div className="space-y-12 my-24">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          My Wishlist
          <span className="ml-4 text-sm text-gray-600 font-medium">
            {wishLists.length} Products found
          </span>
        </h2>
        <button>Sort</button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {wishLists.length === 0 ? (
          <NoSearchedProducts />
        ) : (
          wishLists.map((wishList) => (
            <WishlistItem key={wishList.id} wishList={wishList} />
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;

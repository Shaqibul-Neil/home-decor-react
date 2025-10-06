import { useEffect, useState } from "react";
import NoSearchedProducts from "../Component/NoSearchedProducts";

const Wishlist = () => {
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishList(savedList);
  }, []);

  return <div>Wishlist {wishList.length}</div>;
};

export default Wishlist;

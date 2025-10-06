const loadWishList = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const updateList = (product) => {
  const wishList = loadWishList();
  try {
    const isDuplicate = wishList.some((item) => item.id === product.id);
    if (isDuplicate) return alert("Already Added");
    const updatedWishList = [...wishList, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
  } catch (error) {
    console.log(error);
  }
};

export { loadWishList, updateList };

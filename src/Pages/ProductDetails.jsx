import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { useState } from "react";
import { updateList } from "../Utilities/localStorage";

const ProductDetails = () => {
  const [inputQuantity, setInputQuantity] = useState(1);

  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((item) => item.id === Number(id));
  // console.log(product);
  if (loading) return <p>Loading...</p>;
  const {
    name,
    category,
    price,
    material,
    dimensions,
    stock,
    image,
    description,
  } = product || {};

  //adding to wishlist
  // const handleWishlist = () => {
  //   const existingList = JSON.parse(localStorage.getItem("wishlist"));
  //   let updatedList = [];
  //   // console.log(existingList);

  //   if (existingList) {
  //     //checking if the product already exist in the storage
  //     const isDuplicate = existingList.some((list) => list.id === product.id);
  //     // console.log(isDuplicate);
  //     if (isDuplicate) return alert("Product is in wishlist");
  //     //if not then add
  //     updatedList = [...existingList, product];
  //   } else {
  //     //if 1st time in wishlist
  //     updatedList.push(product);
  //   }
  //   console.log(updatedList);
  //   localStorage.setItem("wishlist", JSON.stringify(updatedList));
  // };

  return (
    <div className="flex justify-between items-center my-24 gap-12">
      <figure className="w-[50%] h-[790px] bg-[rgba(19,19,19,0.05)] rounded-lg flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-[90%] h-[92%] rounded-lg object-cover"
        />
      </figure>
      <div className="space-y-6 w-[50%]">
        <div className="border-b border-gray-400  pb-4 space-y-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="flex items-center gap-4">
            <p className="font-medium text-gray-600 text-lg">
              Category : {category}
            </p>
            {stock ? (
              <div className="badge badge-success">Stock Available</div>
            ) : (
              <div className="badge badge-error">Stock Out</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <h2 className="font-medium text-blue-500 b text-3xl">
            Price : ${price}
          </h2>
          <label htmlFor="quantity" className="font-medium text-2xl">
            Quantity :
          </label>
          <label className="block">
            <input
              type="number"
              placeholder="Quantity"
              className="w-20 border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200"
              min="1"
              value={inputQuantity}
              onChange={(e) => setInputQuantity(e.target.value)}
            />
          </label>
        </div>

        <p className="font-medium text-gray-600 text-base">
          <span className="text-black">Product Details : </span>
          {description}
        </p>

        <div className="flex items-center gap-4">
          <p className="font-medium text-gray-600 text-base">
            <span className="text-black">Dimensions : </span> {dimensions}
          </p>
          <p className="font-medium text-gray-600 text-base">
            <span className="text-black">Materials : </span> {material}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            className="font-bold px-12 py-3 border rounded-lg cursor-pointer text-lg"
            onClick={() => updateList(product)}
          >
            Add to Wishlist
          </button>
          <button className="text-white bg-[#50B1C9] px-12 py-3 rounded-lg cursor-pointer text-lg font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

/*
const handleWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    // console.log(existingList);

    if (existingList) {
      //checking if the product already exist in the storage
      const isDuplicate = existingList.some((list) => list.id === product.id);
      // console.log(isDuplicate);
      if (isDuplicate) {
        //now check again with map to find the id to which u want to add the quantity
        updatedList = existingList.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + Number(inputQuantity),
              }
            : item
        );
      } else {
        //if not then add
        updatedList = [
          ...existingList,
          { ...product, quantity: Number(inputQuantity) },
        ];
      }
    } else {
      //if qst time in wishlist
      updatedList.push({ ...product, quantity: Number(inputQuantity) });
    }
    console.log(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

*/

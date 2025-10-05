import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
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

        <h2 className="font-medium text-blue-500 b text-3xl">
          Price : ${price}
        </h2>

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
          <button className="font-bold px-12 py-3 border rounded-lg cursor-pointer text-lg">
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

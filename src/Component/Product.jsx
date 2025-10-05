import { NavLink } from "react-router";

const Product = ({ product }) => {
  const { id, name, category, price, image, stock } = product;
  return (
    <div className="border border-gray-400 shadow-sm md:space-y-6 space-y-4 md:p-5 p-3 rounded-lg hover:scale-105 transition ease-in-out duration-300">
      <figure className="h-96 rounded-lg flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-96 rounded-lg object-cover"
        />
      </figure>
      <div className="md:space-y-4 space-y-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex items-center gap-4">
          <p className="font-medium text-gray-600 text-lg">
            Category : {category}
          </p>
          {stock ? (
            <div className="badge badge-success  ">Available</div>
          ) : (
            <div className="badge badge-error">Stock Out</div>
          )}
        </div>

        <p className="font-medium text-primary text-2xl">Price : ${price}</p>
      </div>
      <div className="flex justify-end">
        <NavLink to={`/product/${id}`} className="btn btn-outline btn-primary">
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default Product;

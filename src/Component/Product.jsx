const Product = ({ product }) => {
  const { name, category, price, image } = product;
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
        <p className="font-medium text-gray-600">Category : {category}</p>
        <p className="font-medium text-gray-600">Price : {price}</p>
      </div>
      <div className="flex justify-end">
        <button className="btn btn-outline btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default Product;

import { NavLink } from "react-router";

const WishlistItem = ({ wishList }) => {
  return (
    <div className="border border-gray-400 shadow-sm p-4 rounded-lg flex items-center justify-between">
      <div className=" space-y-6 flex items-center gap-6">
        <figure className="h-32 w-32 bg-[rgba(19,19,19,0.05)] rounded-full flex items-center justify-center m-0">
          <img
            src={wishList.image}
            alt={wishList.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        </figure>
        <div className="space-y-2">
          <div className="border-b border-gray-400 border-dashed pb-4 space-y-2">
            <h2 className="text-2xl font-bold">{wishList.name}</h2>
            <p className="font-medium text-gray-600">
              Category: {wishList.category}
            </p>
            <div className="flex items-center gap-12">
              <p className="font-medium text-primary text-2xl">
                Price : ${wishList.price * wishList.quantity}
              </p>
              <p className="font-medium text-2xl">
                Quantity : {wishList.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavLink to={`/cart`} className="btn btn-outline btn-primary">
          Add To Cart
        </NavLink>
      </div>
    </div>
  );
};

export default WishlistItem;

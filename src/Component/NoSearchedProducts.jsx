import Lottie from "lottie-react";
import emptySearch from "../Lottie/emptySearch.json";
const NoSearchedProducts = () => {
  return (
    <div className="flex justify-center py-12">
      <Lottie animationData={emptySearch} loop={true} className="w-120 h-120" />
    </div>
  );
};

export default NoSearchedProducts;

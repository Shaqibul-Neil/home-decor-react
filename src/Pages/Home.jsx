import { Link } from "react-router";
import Product from "../Component/Product";
import useProducts from "../Hooks/useProducts";
import LoadingSpinner from "../Component/LoadingSpinner";

const Home = () => {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 6);
  return (
    <>
      <section className="my-16 lg:my-24 space-y-12">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <Link to="/products" className="btn btn-primary w-48 h-12 text-lg">
            See All Products
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

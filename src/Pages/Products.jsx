import { useState } from "react";
import Product from "../Component/Product";
import useProducts from "../Hooks/useProducts";
import NoSearchedProducts from "../Component/NoSearchedProducts";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const searchedText = search.toLowerCase().trim();
  console.log(search);
  const searchedItems = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchedText)
      )
    : products;
  console.log(searchedItems);
  return (
    <section className="my-16 lg:my-24 space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          All Products
          <span className="ml-4 text-sm text-gray-600 font-medium">
            {searchedItems.length} Products found
          </span>
        </h2>
        <label className="block">
          <input
            type="search"
            placeholder="Search..."
            className="w-96 border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      {searchedItems.length === 0 ? (
        <NoSearchedProducts />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedItems.length === 0 ? (
            <NoSearchedProducts />
          ) : (
            searchedItems.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Products;

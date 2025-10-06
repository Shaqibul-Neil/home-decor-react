import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WishlistChart = ({ sortedProducts }) => {
  //generate chart data
  const totalsByCategory = {};
  sortedProducts.forEach((product) => {
    const category = product.category;
    // console.log(category);
    totalsByCategory[category] =
      (totalsByCategory[category] || 0) + product.price;
  });
  //   console.log(totalsByCategory);
  const chartData = Object.keys(totalsByCategory).map((category) => ({
    category: category,
    totalPrice: totalsByCategory[category],
  }));
  console.log(chartData);

  return sortedProducts.length === 0 ? (
    ""
  ) : (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">My Wishlist Summary</h2>
      <div className="bg-base-100 p-4 rounded-xl h-80 border">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="totalPrice"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WishlistChart;

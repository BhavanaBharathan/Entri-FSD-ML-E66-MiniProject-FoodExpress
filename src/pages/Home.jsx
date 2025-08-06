

import { categories, restaurants } from "../data/mockData";

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((cat) => (
          <div key={cat.id} className="text-center">
            <img src={cat.image} alt={cat.name} className="w-20 h-20 rounded-full" />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Featured Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {restaurants.map((res) => (
          <div key={res.id} className="border p-4 rounded shadow">
            <img src={res.image} alt={res.name} className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{res.name}</h3>
            <p className="text-gray-500">⭐ {res.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;



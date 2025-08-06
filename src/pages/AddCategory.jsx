
import { useEffect, useState } from "react";

export default function AddCategory() {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const storedRestaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

    setCategories(storedCategories);
    setRestaurants(storedRestaurants);
  }, []);

  // ✅ Delete category
  const handleDeleteCategory = (id) => {
    const updatedCategories = categories.filter((cat) => cat.id !== id);
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  // ✅ Delete restaurant
  const handleDeleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter((rest) => rest.id !== id);
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-800">
        Added Categories & Restaurants
      </h1>

      {/* ✅ Categories Section */}
      <h2 className="text-xl font-semibold mb-4 text-red-700">Food Categories</h2>
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white p-4 rounded shadow">
              <img src={cat.image} alt={cat.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{cat.name}</h3>
              <p className="text-gray-600 font-bold">₹{cat.price}</p>
              <button
                onClick={() => handleDeleteCategory(cat.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mb-8">No categories added yet.</p>
      )}

      {/* ✅ Restaurants Section */}
      <h2 className="text-xl font-semibold mb-4 text-red-700">Restaurants</h2>
      {restaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {restaurants.map((rest) => (
            <div key={rest.id} className="bg-white p-4 rounded shadow">
              <img src={rest.image} alt={rest.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{rest.name}</h3>
              <p className="text-gray-600">Rating: {rest.rating}</p>
              <p className="text-gray-500">Category: {rest.category}</p>
              <button
                onClick={() => handleDeleteRestaurant(rest.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No restaurants added yet.</p>
      )}
    </div>
  );
}





// ******************************************************


// import React from 'react'
// import { useEffect, useState } from "react";

// export default function AddCategory() {
//   const [categories, setCategories] = useState([]);
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     setCategories(JSON.parse(localStorage.getItem("categories")) || []);
//     setRestaurants(JSON.parse(localStorage.getItem("restaurants")) || []);
//   }, []);
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Categories</h2>

//       <div className="flex gap-4 overflow-x-auto mb-8">
//         {categories.length > 0 ? (
//           categories.map((cat) => (
//             <div key={cat.id} className="text-center">
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-20 h-20 rounded-full object-cover"
//               />
//               <p className="mt-2 font-semibold">{cat.name}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No categories added yet.</p>
//         )}
//       </div>

//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Restaurants</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {restaurants.length > 0 ? (
//           restaurants.map((res) => (
//             <div key={res.id} className="border rounded shadow p-4 bg-white">
//               <img
//                 src={res.image}
//                 alt={res.name}
//                 className="w-full h-32 object-cover rounded"
//               />
//               <h3 className="text-lg font-semibold mt-2">{res.name}</h3>
//               <p className="text-gray-500">⭐ {res.rating}</p>
//               <p className="text-gray-600 text-sm">{res.category}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No restaurants added yet.</p>
//         )}
//       </div>
//     </div>
//   )
// }

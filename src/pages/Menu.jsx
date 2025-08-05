// import { menuItems } from "../data/mockData";
// import { useCart } from "../context/cartContext";

// function Menu() {
//   const { addToCart } = useCart();

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Menu</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {menuItems.map((item) => (
//           <div key={item.id} className="border p-4 rounded shadow">
//             <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
//             <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
//             <p className="text-gray-500">{item.description}</p>
//             <p className="font-bold">₹{item.price}</p>
//             <button
//               onClick={() => addToCart(item)}
//               className="bg-orange-500 text-white px-4 py-2 mt-2 rounded hover:bg-orange-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;


// *******************************category added code**************************


import { useState } from "react";
import { menuItems } from "../data/mockData";
import { useCart } from "../context/cartContext";

function Menu() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Pizza", "Burger", "Drink", "Dessert"];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Menu</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search food..."
        className="border p-2 rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
              <p className="font-bold">₹{item.price}</p>
              <button
                onClick={() => {addToCart(item);
                                  alert("Item added to cart!");
                }}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items found.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;



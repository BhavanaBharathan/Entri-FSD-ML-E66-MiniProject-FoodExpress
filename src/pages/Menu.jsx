


//*******************admin added items to menu*********************** */


import { useState, useEffect } from "react";
import { menuItems } from "../data/mockData"; // Default mock data
import { useCart } from "../context/cartContext";

function Menu() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allItems, setAllItems] = useState([]);

  // ✅ Fetch admin-added categories from localStorage and combine with mock data
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    
    // Add a default category for admin-added items if not provided
    const formattedAdminItems = storedCategories.map((item) => ({
      ...item,
      description: "Delicious food item", // Default description
      category: "Admin", // Or any category
    }));

    // Merge with mock data
    setAllItems([...menuItems, ...formattedAdminItems]);
  }, []);

  // ✅ Extract dynamic categories (including Admin)
  const categories = ["All", ...new Set(allItems.map((item) => item.category))];

  // ✅ Filter items by search & category
  const filteredItems = allItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      {/* Search */}
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
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
              <p className="font-bold">₹{item.price}</p>
              <button
                onClick={() => {
                  addToCart(item);
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

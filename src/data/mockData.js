export const categories = [
  { id: 1, name: "Pizza", image: "pizza.jpg" },
  { id: 2, name: "Burgers", image: "burger.jpg" },
  { id: 3, name: "Drinks", image: "pizza.jpg" },
  { id: 4, name: "Desserts", image: "desserts.jpg" }
];

export const restaurants = [
  { id: 1, name: "Pizza Palace", image: "pizza-restuarant.jpg", rating: 4.5 },
  { id: 2, name: "Burger House", image: "burger-restaurant.jpg", rating: 4.3 },
  { id: 3, name: "Drink Zone", image: "soft-drinks.jpg", rating: 4.2 }
];


export const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza",
    price: 299,
    image: "pizza.jpg",
    category: "Pizza"
  },
  {
    id: 2,
    name: "Veg Burger",
    description: "Delicious veg patty with fresh veggies",
    price: 149,
    image: "burger.jpg",
    category: "Burger"
  },
  {
    id: 3,
    name: "Coca Cola",
    description: "Chilled soft drink",
    price: 49,
    image: "soft-drinks.jpg",
    category: "Drink"
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Delicious dessert for sweet lovers",
    price: 199,
    image: "desserts.jpg",
    category: "Dessert"
  }
];



export const restaurantsData = [
  {
    id: 1,
    name: "Pizza Palace",
    menu: [
      { id: 101, name: "Margherita", price: 250 },
      { id: 102, name: "Pepperoni", price: 350 },
    ],
  },
  {
    id: 2,
    name: "Burger Hub",
    menu: [
      { id: 201, name: "Cheese Burger", price: 150 },
      { id: 202, name: "Veggie Burger", price: 120 },
    ],
  },
];
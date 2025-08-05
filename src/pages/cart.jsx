import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";



function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return <h2 className="bg-red-500 text-white font-bold px-4 py-2">Your cart is empty</h2>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-2 bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xl font-bold">Total: ₹{totalPrice}</div>
      <div className="flex gap-4 mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={clearCart}>
          Clear Cart
        </button>
        <Link to="/checkout" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;

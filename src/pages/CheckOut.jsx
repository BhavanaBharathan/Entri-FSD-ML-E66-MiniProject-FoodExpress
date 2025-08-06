export default function Checkout() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Your order has been placed successfully!");
      }}
    >
      <div className="mb-3">
        <label className="block mb-1">Full Name</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Phone Number</label>
        <input
          type="tel"
          className="w-full border px-4 py-2 rounded"
          pattern="\d{10}"
          placeholder="Enter 10-digit number"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Address</label>
        <textarea
          className="w-full border px-4 py-2 rounded"
          rows="3"
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="block mb-1">Payment Method</label>
        <select className="w-full border px-4 py-2 rounded">
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit/Debit Card</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-red-400 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-500 transition"
      >
        Place Order
      </button>
    </form>
  </div>
</div>

  );
}

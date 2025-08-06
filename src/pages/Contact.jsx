import { Link } from "react-router-dom";

export default function Contact() {
  return (
    
    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      {/* <h3 class="text-lg font-semibold text-white mb-4 ">  
        <a href="/" class="flex items-center space-x-2">
      <img src="FoodExpress.jpg" alt="FoodExpress Logo" class="h-10 w-10 rounded-full" />
      <span class="text-xl font-bold text-red-500">FoodExpress</span>
    </a></h3> */}
      <h1 className="text-4xl font-bold text-red-500 mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center mb-10 max-w-lg">
        We’d love to hear from you! Whether you have a question about our services or need assistance, feel free to
        reach out.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-6 text-red-500">Get in Touch</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">Address:</span> ,Street No:13 ,Ganadi nagar,Banglore, India
          </p>
          <p>
            <span className="font-semibold">Phone:</span> 9576896936
          </p>
          <p>
            <span className="font-semibold">Email:</span> FoodExpress@gmail.com
          </p>
        </div>
      </div>
    </div>


 
  )
}

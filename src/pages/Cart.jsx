import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import toast from "react-hot-toast";

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total.toFixed(2));
  }, [cart]);

  const handleCheckout = () => {
    toast.success("Checkout successful 🎉 (Demo)");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>

            <p className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </p>

            <p className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </p>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        /* Empty Cart */
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>

          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

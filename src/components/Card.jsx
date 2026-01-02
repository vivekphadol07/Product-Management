import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

export const Card = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  const isInCart = cart.some((p) => p.id === item.id);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-3">

      <img
        src={item.image}
        alt={item.title}
        className="h-48 object-contain mx-auto"
      />

      <h2 className="font-semibold text-sm line-clamp-2">
        {item.title}
      </h2>

      <p className="text-xs text-gray-500 line-clamp-2">
        {item.description}
      </p>

      <p className="font-bold text-lg">${item.price}</p>

      {isInCart ? (
        <button
          onClick={removeFromCart}
          className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Remove Item
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

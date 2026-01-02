import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex gap-6 items-center bg-white p-4 rounded-xl shadow-sm">

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-contain"
      />

      {/* Details */}
      <div className="flex flex-col gap-3 flex-1">
        <h1 className="font-semibold text-lg">{item.title}</h1>
        <p className="text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>

        {/* Price & Delete */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">${item.price}</p>

          <button
            onClick={removeFromCart}
            className="text-red-500 text-xl hover:text-red-600"
          >
            <MdDelete />
          </button>
        </div>
      </div>

    </div>
  );
};

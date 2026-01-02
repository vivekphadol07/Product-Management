import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

export const TableRow = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isInCart = cart.some((p) => p.id === item.id);

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <tr className="border-b">
      <td className="p-3">
        <img src={item.image} alt={item.title} className="h-14 mx-auto" />
      </td>
      <td className="p-3 text-sm">{item.title}</td>
      <td className="p-3">${item.price}</td>
      <td className="p-3">
        {isInCart ? (
          <button
            onClick={removeFromCart}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        )}
      </td>
    </tr>
  );
};

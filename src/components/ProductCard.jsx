import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-white border border-[#B6D1C7] rounded-2xl p-5
        shadow-sm hover:shadow-lg
        transition-all duration-200
        hover:-translate-y-1
      "
    >
      {/* Product Name */}
      <h4 className="text-lg font-semibold text-[#335F5F] mb-3">
        {product.name}
      </h4>

      {/* Product Info */}
      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex justify-between">
          <span className="font-medium text-gray-700">Price</span>
          <span>₹{product.price}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium text-gray-700">Category</span>
          <span>{product.category}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium text-gray-700">Stock</span>
          <span>{product.stock}</span>
        </p>
      </div>

      {/* Action */}
      <button
        onClick={() => navigate(`/Product Management/edit-product/${product.id}`)}
        className="
          mt-5 w-full px-4 py-2.5 text-sm font-medium
          rounded-full
          bg-[#335F5F] text-white
          hover:bg-[#5F8F82]
          transition-all duration-200
          shadow-sm hover:shadow-md
        "
      >
        Edit Product
      </button>
    </div>
  );
};

export default ProductCard;

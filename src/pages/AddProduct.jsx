import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/ProductContext";
import { FaLongArrowAltLeft } from "react-icons/fa";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addOrUpdateProduct } = useProducts();

  const saveProduct = (product) => {
    addOrUpdateProduct(product);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#4169E1]/5">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="
            mb-6 inline-flex items-center gap-2
            text-sm font-medium
            text-[#0504AA]
            hover:text-[#031273]
            transition
          "
        >
          <FaLongArrowAltLeft className="text-base" />
          Back to Products
        </button>

        {/* Form */}
        <ProductForm saveProduct={saveProduct} />
      </div>
    </div>
  );
};

export default AddProduct;

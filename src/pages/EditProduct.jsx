import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import { FaLongArrowAltLeft } from "react-icons/fa";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, addOrUpdateProduct } = useProducts();

  const product = getProductById(id);

  if (!product) {
    return (
      <p className="p-6 text-sm text-[#4169E1]">
        Product not found
      </p>
    );
  }

  const saveProduct = (updatedProduct) => {
    addOrUpdateProduct(updatedProduct);
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
        <ProductForm
          saveProduct={saveProduct}
          editingProduct={product}
        />
      </div>
    </div>
  );
};

export default EditProduct;

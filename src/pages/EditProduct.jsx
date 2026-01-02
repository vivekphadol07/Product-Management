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
            <p className="p-6 text-sm text-gray-600">
                Product not found
            </p>
        );
    }

    const saveProduct = (updatedProduct) => {
        addOrUpdateProduct(updatedProduct);
        navigate("/Product Management/");
    };

    return (
        <div className="min-h-screen bg-[#EAF4F1]-500">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/Product Management/")}
                    className="
                        mb-6 inline-flex items-center gap-2
                        text-sm font-medium
                        text-[#335F5F]
                        hover:text-[#5F8F82]
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

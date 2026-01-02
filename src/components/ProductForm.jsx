import { useEffect, useState } from "react";

const ProductForm = ({ saveProduct, editingProduct }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    }
  }, [editingProduct]);

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.price || form.price <= 0)
      err.price = "Enter a valid price";
    if (!form.category) err.category = "Category is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    saveProduct(form);
    setForm({
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-[#EAF4F1] border border-[#B6D1C7] rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6 text-[#335F5F]">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h3>

      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Product Name *"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className={`w-full px-4 py-2.5 rounded-lg border bg-white
              focus:outline-none focus:ring-2
              ${
                errors.name
                  ? "border-red-500 focus:ring-red-300"
                  : "border-[#B6D1C7] focus:ring-[#5F8F82]"
              }`}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            placeholder="Price *"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            className={`w-full px-4 py-2.5 rounded-lg border bg-white
              focus:outline-none focus:ring-2
              ${
                errors.price
                  ? "border-red-500 focus:ring-red-300"
                  : "border-[#B6D1C7] focus:ring-[#5F8F82]"
              }`}
          />
          {errors.price && (
            <p className="text-sm text-red-500 mt-1">
              {errors.price}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <input
            type="text"
            placeholder="Category *"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            className={`w-full px-4 py-2.5 rounded-lg border bg-white
              focus:outline-none focus:ring-2
              ${
                errors.category
                  ? "border-red-500 focus:ring-red-300"
                  : "border-[#B6D1C7] focus:ring-[#5F8F82]"
              }`}
          />
          {errors.category && (
            <p className="text-sm text-red-500 mt-1">
              {errors.category}
            </p>
          )}
        </div>

        {/* Stock */}
        <div>
          <input
            type="number"
            placeholder="Stock"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-[#B6D1C7] bg-white
              focus:outline-none focus:ring-2 focus:ring-[#5F8F82]"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <textarea
            placeholder="Description (Optional)"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows="3"
            className="w-full px-4 py-2.5 rounded-lg border border-[#B6D1C7] bg-white
              focus:outline-none focus:ring-2 focus:ring-[#5F8F82]"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="
              px-8 py-2.5 rounded-full
              bg-[#335F5F] text-white font-medium
              hover:bg-[#5F8F82]
              transition-all duration-200
              shadow-sm hover:shadow-md
            "
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

import { useNavigate } from "react-router-dom";

const ProductTable = ({ products }) => {
  const navigate = useNavigate();

  return (
    <table className="min-w-full border border-[#B6D1C7] rounded-xl overflow-hidden">
      {/* ===== TABLE HEAD ===== */}
      <thead className="bg-[#335F5F]">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold text-white">
            Name
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-white">
            Price
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-white">
            Category
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-white">
            Stock
          </th>
          <th className="px-4 py-3 text-center text-sm font-semibold text-white">
            Action
          </th>
        </tr>
      </thead>

      {/* ===== TABLE BODY ===== */}
      <tbody className="divide-y bg-white" style={{ borderColor: "#B6D1C7" }}>
        {products.length > 0 ? (
          products.map((p, index) => (
            <tr
              key={p.id}
              className={`transition ${
                index % 2 === 0 ? "bg-[#EAF4F1]" : "bg-white"
              } hover:bg-[#B6D1C7]/40`}
            >
              <td className="px-4 py-3 text-sm font-medium text-gray-800">
                {p.name}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                ₹{p.price}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {p.category}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {p.stock}
              </td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => navigate(`/Product Management/edit-product/${p.id}`)}
                  className="
                    px-4 py-1.5 text-sm rounded-full
                    bg-[#5F8F82] text-white
                    hover:bg-[#335F5F]
                    transition-all duration-200
                    shadow-sm hover:shadow-md
                  "
                >
                  Edit
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="5"
              className="px-6 py-8 text-center text-gray-500 italic"
            >
              No products found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;

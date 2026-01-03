import { useNavigate } from "react-router-dom";

const ProductTable = ({ products }) => {
  const navigate = useNavigate();

  return (
    <table className="min-w-full border border-[#2337C6]/30 rounded-xl overflow-hidden">
      {/* ===== TABLE HEAD ===== */}
      <thead className="bg-[#031273]">
        <tr>
          <th className="px-4 py-5 text-left text-md font-semibold text-white">
            Name
          </th>
          <th className="px-4 py-5 text-left text-md font-semibold text-white">
            Price
          </th>
          <th className="px-4 py-5 text-left text-md font-semibold text-white">
            Category
          </th>
          <th className="px-4 py-5 text-left text-md font-semibold text-white">
            Stock
          </th>
          <th className="px-4 py-5 text-center text-md font-semibold text-white">
            Action
          </th>
        </tr>
      </thead>

      {/* ===== TABLE BODY ===== */}
      <tbody className="bg-white divide-y divide-[#2337C6]/20">
        {products.length > 0 ? (
          products.map((p, index) => (
            <tr
              key={p.id}
              className={`
                transition-colors
                ${index % 2 === 0 ? "bg-[#4169E1]/5" : "bg-white"}
                hover:bg-[#4CC9F0]/20
              `}
            >
              <td className="px-4 py-3 text-sm font-medium text-[#031273]">
                {p.name}
              </td>
              <td className="px-4 py-3 text-sm text-[#0504AA]">
                ₹{p.price}
              </td>
              <td className="px-4 py-3 text-sm text-[#0504AA]">
                {p.category}
              </td>
              <td className="px-4 py-3 text-sm text-[#0504AA]">
                {p.stock}
              </td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() =>
                    navigate(`/edit-product/${p.id}`)
                  }
                  className="
                    px-4 py-1.5 text-sm rounded-full
                    bg-[#2337C6] text-white
                    hover:bg-[#0504AA]
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
              className="px-6 py-8 text-center text-[#4169E1] italic"
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

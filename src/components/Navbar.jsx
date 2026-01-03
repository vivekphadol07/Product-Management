import { FaPlus, FaSearch, FaList, FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ view, setView, search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-[#2337C6]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Title */}
        <h1 className="text-xl font-semibold text-[#031273]">
          Product Management
        </h1>

        {/* Search */}
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-3 text-[#4169E1] text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="
              w-full pl-9 pr-3 py-2.5 rounded-full
              border border-[#2337C6]/40 bg-white
              focus:outline-none focus:ring-2 focus:ring-[#4169E1]
              text-sm text-[#0504AA]
              placeholder:text-[#4169E1]
            "
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {/* Toggle View */}
          <button
            onClick={() => setView(view === 'table' ? 'card' : 'table')}
            className="
              flex items-center gap-2
              px-4 py-2 rounded-full text-sm font-medium
              border border-[#2337C6]/40 bg-white
              text-[#0504AA]
              hover:bg-[#4CC9F0]/30
              transition
            "
          >
            {view === "table" ? <FaThLarge /> : <FaList />}
            {view === "table" ? "Card" : "Table"}
          </button>

          {/* Add Product */}
          <button
            onClick={() => navigate("/add-product")}
            className="
              flex items-center gap-2
              px-5 py-2 rounded-full text-sm font-medium
              bg-[#031273] text-white
              hover:bg-[#0504AA]
              transition-all
              shadow-sm hover:shadow-md
            "
          >
            <FaPlus />
            Add Product
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

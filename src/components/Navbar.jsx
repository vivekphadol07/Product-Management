import { FaPlus, FaSearch, FaList, FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ view, setView, search, setSearch }) => {
    const navigate = useNavigate();

    return (
        <nav className="bg-[#EAF4F1]-100 border-b border-[#B6D1C7] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Title */}
                <h1 className="text-xl font-semibold text-[#335F5F]"> Product Management </h1>

                {/* Search */}
                <div className="relative w-full md:w-96">
                    <FaSearch className="absolute left-3 top-3 text-[#5F8F82] text-sm" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="
                            w-full pl-9 pr-3 py-2.5 rounded-full
                            border border-[#B6D1C7] bg-white
                            focus:outline-none focus:ring-2 focus:ring-[#5F8F82]
                            text-sm
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
                            border border-[#B6D1C7] bg-white
                            text-[#335F5F]
                            hover:bg-[#B6D1C7]/40
                            transition
                        "
                    >
                        {view === "table" ? <FaThLarge /> : <FaList />}
                        {view === "table" ? "Card" : "Table"}
                    </button>

                    {/* Add Product */}
                    <button
                        onClick={() => navigate("/Product Management/add-product")}
                        className="
                            flex items-center gap-2
                            px-5 py-2 rounded-full text-sm font-medium
                            bg-[#335F5F] text-white
                            hover:bg-[#5F8F82]
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

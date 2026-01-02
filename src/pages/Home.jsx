import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProductTable from "../components/ProductTable";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const { products } = useProducts();
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentProducts = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#EAF4F1]-400">
      <Navbar
        view={view}
        setView={setView}
        search={search}
        setSearch={setSearch}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* CONTENT CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 transition-all">
          {view === "table" ? (
            <div className="border border-[#B6D1C7] rounded-xl overflow-x-auto">
              <ProductTable products={currentProducts} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

        {/* PAGINATION */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white px-6 py-3 rounded-full shadow-md border border-[#B6D1C7]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

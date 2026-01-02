import React, { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { Card } from "../components/Card";
import { TableRow } from "../components/TableRow";

export const Home = ({ searchQuery }) => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [view, setView] = useState("card"); // card | table

  // ================= FETCH DATA =================
  const fetchProductData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching products", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // ================= SEARCH FILTER =================
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* ================= VIEW TOGGLE ================= */}
      <div className="flex justify-end gap-3 mb-5">
        <button
          onClick={() => setView("card")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            view === "card"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Card View
        </button>

        <button
          onClick={() => setView("table")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            view === "table"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Table View
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      {loading ? (
        <Spinner />
      ) : filteredItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          No products found
        </p>
      ) : view === "card" ? (
        /* ================= CARD VIEW ================= */
        <div
          className="
            grid
            grid-cols-2        
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-4
            gap-4
          "
        >
          {filteredItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        /* ================= TABLE VIEW ================= */
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <TableRow key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

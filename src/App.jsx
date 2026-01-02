import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-background">
        <BrowserRouter>
          <Routes>
            <Route path="/Product Management/" element={<Home />} />
            <Route path="/Product Management/add-product" element={<AddProduct />} />
            <Route path="/Product Management/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
};

export default App;

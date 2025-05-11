import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/layoute/Navbar";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import ShopingProvider from "./context/shopingContext";

function App() {
  return (
    <>
      <ShopingProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/ProductPage/:id" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </ShopingProvider>
    </>
  );
}

export default App;

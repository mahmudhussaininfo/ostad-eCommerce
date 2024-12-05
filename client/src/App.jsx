import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductByBrand from "./pages/ProductByBrand";
import ProductListByCategory from "./pages/ProductListByCategory";
import ProductListByKeyword from "./pages/ProductListByKeyword";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Otp from "./pages/Otp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/by-brand/:id" element={<ProductByBrand />} />
          <Route path="/by-category/:id" element={<ProductListByCategory />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route
            path="/by-keyword/:keyword"
            element={<ProductListByKeyword />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

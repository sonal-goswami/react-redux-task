import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ProductList from "./features/products/ProductList";
import CrudPage from "./features/crud/CrudPage";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </Router>
  );
}

export default App;

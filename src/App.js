import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  CartPage,
  ProductPage,
  LoginPage,
  RegisterPage,
  AdminPage,
} from "./pages";
import Header from "./layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

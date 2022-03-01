import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, CartPage, ProductPage, LoginPage, RegisterPage, AdminPage } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

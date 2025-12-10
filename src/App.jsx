import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/Containers/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CheckoutForm from "./components/Checkout/CheckoutForm.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* catálogo completo */}
        <Route path="/" element={<ItemListContainer />} />

        {/* catálogo filtrado por categoría */}
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

        {/* detalle de producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />

        {/* 404 */}
        <Route path="*" element={<h2 style={{ color: "#fff", textAlign: "center", marginTop: "40px" }}>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;

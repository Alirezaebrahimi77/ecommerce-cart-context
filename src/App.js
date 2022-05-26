import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./contexts/cart/CartProvider";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

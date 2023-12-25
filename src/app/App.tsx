import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import Cart from "../pages/Cart";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

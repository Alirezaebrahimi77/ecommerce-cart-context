import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {useCart} from "../../contexts/cart/CartProvider"
import {Link} from "react-router-dom"
function Header() {
    const activeStyle = {
        backgroundColor: "#8b5cf6",
        color: "#fff"
    }
    const {cart} = useCart()
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <p>Alireza</p>
        </Link>
      </div>
      <nav>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/" style={({isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>

          </li>
          <li className={styles.li}>
            <NavLink to="/cart" style={({isActive }) => isActive ? activeStyle : undefined}>Cart</NavLink>
            <span>{cart.length}</span>

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

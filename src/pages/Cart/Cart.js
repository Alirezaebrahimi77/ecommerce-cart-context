import React from "react";
import Layout from "../../layout/Layout";
import styles from "./Cart.module.css";
import { useCart, useCartActions } from "../../contexts/cart/CartProvider";
import StarRatings from "react-star-ratings";
import {FiTrash} from "react-icons/fi"
import {Link} from "react-router-dom"
import {getCartTotal} from "../../utils/getCartTotal"
function Cart() {
  const { cart } = useCart();
  const dispatch = useCartActions()
  const incHandler = (product) => {
    dispatch({type: "ADD_TO_CART", payload: product})
  }
  const decHandler = (product) => {
    dispatch({type: "REMOVE_PRODUCT", payload: product})
  }
  return (
    <Layout>
      <main className={styles.container}>
        <section className={styles.cart}>
          {cart.length < 1 && <p>Cart is empty</p>}
          {cart?.map((item) => (
            <CartItem key={item.id} product={item} incHandler={incHandler} decHandler={decHandler}/>
          ))}
        </section>
        <section className={styles.total}>
          <div className={styles.summary}>
            <p className={styles.cartSummaryTitle}>Cart Summary</p>
            <div className={styles.cartSummaryContent}> 
            
            <div className={styles.cartTotal}>
              <p>Cart total:</p>
              <p>{getCartTotal(cart)}$</p>
            </div>
            <hr />
            <div className={styles.cartTotal}>
              <p>Cart summary: </p>
              <p>{getCartTotal(cart)}$</p>
            
            </div>
            <Link to={"/checkout"}>
            <div>
              <button className={styles.cartButtom}>Go to checkout</button>
            </div>
            </Link>

            </div>

          </div>


        </section>
      </main>
    </Layout>
  );
}

export default Cart;

const CartItem = ({ product, incHandler, decHandler }) => {
  return (
    <div className={styles.singleCartContainer}>
      <div className={styles.productInfo}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productInfo__details}>
          <p>{product.title}</p>
          <div className={styles.rating}>
            <StarRatings
              rating={product.rating.rate}
              starDimension="14px"
              starSpacing="1px"
              starRatedColor="gold"
            />
            <span>{`(${product.rating.count})`}</span>
          </div>
        </div>
      </div>
      <div className={styles.cartActions}>
        <div className={styles.price}>
          <p>{product.price}$</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => decHandler(product)}>{product.quantity === 1 ? <FiTrash /> : "-"}</button>
          <input type="text" value={product.quantity} readOnly />
          <button onClick={() => incHandler(product)}>+</button>
        </div>
      </div>
    </div>
  );
};

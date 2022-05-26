import React from 'react'
import { useCartActions } from '../../contexts/cart/CartProvider'
import styles from "./ProductCart.module.css"
import 'react-toastify/dist/ReactToastify.css';
function ProductCard({product, cart, checkInCart}) {
  const dispatch = useCartActions()
  const addProductHandler = (product) => {
    dispatch({type: "ADD_TO_CART", payload: product})
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{product.title}</p>
        </div>
        <div className={styles.cardFooter}>
          <p>{product.price}$</p>
          <button className={styles.button} onClick={() => addProductHandler(product)}>{checkInCart(cart, product.id) ? "In cart" : "Add to cart"}</button>

        </div>
      </div>

    </div>
  ) 
}

export default ProductCard
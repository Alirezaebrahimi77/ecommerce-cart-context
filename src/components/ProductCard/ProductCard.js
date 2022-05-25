import React from 'react'
import { useCartActions } from '../../contexts/cart/CartProvider'
import styles from "./ProductCart.module.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductCard({product}) {
  const dispatch = useCartActions()
  const addProductHandler = (product) => {
    toast.success(`${product.title} added to the cart`)
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
          <button className={styles.button} onClick={() => addProductHandler(product)}>Add to cart</button>

        </div>
      </div>
      <ToastContainer />

    </div>
  ) 
}

export default ProductCard
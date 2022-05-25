import React from 'react'
import Layout from '../../layout/Layout'
import styles from "./Cart.module.css"
import {useCart} from "../../contexts/cart/CartProvider"
import StarRatings from "react-star-ratings";
function Cart() {
  const {cart} = useCart()
  return (
    <Layout>
        <main className={styles.container}>
            <section className={styles.cart}>
              {cart.length < 1 && <p>Cart is empty</p>}
              {cart?.map(item => (
                <CartItem key={item.id} product={item}/>
              ))}


            </section>
            <section className={styles.total}>

            </section>
        </main>
    </Layout>
  
  )
}

export default Cart

const CartItem = ({product}) => {
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
          <button>-</button>
          <input type="text" value={product.quantity} readOnly/>
          <button>+</button>
      </div>

      </div>



    </div>
  )

}
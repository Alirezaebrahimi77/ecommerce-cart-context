import styles from "./Home.module.css"
import React, {useEffect, useState} from 'react'
import Layout from '../../layout/Layout'
import ProductCard from "../../components/ProductCard/ProductCard"
import {checkInCart} from "../../utils/checkInCart"
import {useCart} from "../../contexts/cart/CartProvider"
function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const {cart} = useCart()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      if(localStorage.getItem("homeProducts")){
        setProducts(JSON.parse(localStorage.getItem("homeProducts")))
        setLoading(false)
      }else{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json()
        setLoading(false)
        localStorage.setItem("homeProducts", JSON.stringify(data));
        setProducts(data)

      }
      }
    
    fetchData()

  }, [])
  return (
    <Layout>
        <main className={styles.main}>
            <section className={styles.products}>
              {loading && <p>Loading...</p>}
              {products?.map(product => (
                  <ProductCard key={product.id} product={product} cart={cart} checkInCart={checkInCart}/>
                ))}
            </section>
        </main>
        
    </Layout>
  )
}

export default Home
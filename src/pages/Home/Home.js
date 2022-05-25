import styles from "./Home.module.css"
import React, {useEffect, useState} from 'react'
import Layout from '../../layout/Layout'
import ProductCard from "../../components/ProductCard/ProductCard"
function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if(products.length > 0){
        return
      }else{
        setLoading(true)
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json()
        setLoading(false)
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
                  <ProductCard key={product.id} product={product}/>
                ))}
            </section>
        </main>
        
    </Layout>
  )
}

export default Home
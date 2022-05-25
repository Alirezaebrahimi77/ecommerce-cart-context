import React from 'react'
import Header from '../components/header/Header'
import styles from "./Layout.module.css"
import Footer from "../components/footer/Footer"
function Layout({children}) {
  return (
    <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
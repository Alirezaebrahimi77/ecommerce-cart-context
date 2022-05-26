import React from 'react'
import LoginForm from '../../components/Login/LoginForm'
import Layout from '../../layout/Layout'
import styles from "./Login.module.css"
function Login() {
  return (
    <Layout>
       <LoginForm />
    </Layout>
  )
}

export default Login
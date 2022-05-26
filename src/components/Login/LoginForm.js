import React from 'react'
import Input from "../Input/Input"
import {useFormik} from "formik"
import * as Yup from "yup"
import styles from "./Login.module.css"
import {Link} from "react-router-dom"

const initialValues = {
    email: "",
    password: "",
}

const onSubmit = (values) =>{
    console.log(values);
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .required('No password provided.')
})
function LoginForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true 
    })
  return (
    <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={onSubmit} className={styles.form}>
            <Input formik={formik} name="email" label="Email" />
            <Input formik={formik} name="password" label="Password" type="password"/>
            <button type='submit' disabled={!formik.isValid} className={styles.submitButton}>
                Login
            </button>
            <Link to={"/signup"}>
                <p className={styles.signedIn}>Create account here</p>
            </Link>
        </form>
    </div>
  )
}

export default LoginForm
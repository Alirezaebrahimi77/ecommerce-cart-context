import React from 'react'
import Input from "../Input/Input"
import {useFormik} from "formik"
import * as Yup from "yup"
import styles from "./Signup.module.css"
import {Link} from "react-router-dom"

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
}

const onSubmit = (values) =>{
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string()
    .required("Name is required")
    .min(6, "Name length is not valid"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]{10}$/, "Invalid Phone Number")
        .nullable(),
    password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

function SignupForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true 
    })
  return (
    <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign Up</h2>
        <form onSubmit={onSubmit} className={styles.form}>
            <Input formik={formik} name="name" label="Name" />
            <Input formik={formik} name="email" label="Email" />
            <Input formik={formik} name="phoneNumber" label="Phone Number" type="tel"/>
            <Input formik={formik} name="password" label="Password" type="password"/>
            <Input formik={formik} name="passwordConfirm" label="Password Confirm" type="password"/>
            <button type='submit' disabled={!formik.isValid} className={styles.submitButton}>
                Submit
            </button>
            <Link to={"/login"}>
                <p className={styles.signedIn}>Already signed up?</p>
            </Link>
        </form>
    </div>
  )
}

export default SignupForm
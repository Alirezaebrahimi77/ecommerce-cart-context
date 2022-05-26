import React from 'react'
import styles from "./Input.module.css"
function Input({name, label, formik, type = "text" }) {
  return (
    <div className={styles.formControl}>
        <label htmlFor={name} className={styles.label}>{`${label}:`}</label>
        <input
        id={name} 
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
        className={styles.input}
        />
            {formik.errors[name] && formik.touched[name] && (
                <div className={styles.error}>{formik.errors[name]}</div>
            )}
    </div>
  )
}

export default Input
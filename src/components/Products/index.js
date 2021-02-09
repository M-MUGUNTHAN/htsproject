import React from 'react'
import styles from "./products.module.css";
import Card from './Card'

export default function Products(props) {
    return (
        <div className={styles.container}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    )
}

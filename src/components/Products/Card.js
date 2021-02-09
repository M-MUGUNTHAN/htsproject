import React from 'react'
import styles from "./products.module.css";
import prod1 from "../../assets/prod3.png";
export default function Card(props) {
    return (
        <div className={styles.cardContainer}>
        <div className={styles.toprated}>top rated</div> 
        <div className={styles.imagecontainer}>
            <img className={styles.image} src={prod1}/>
        </div>
        <div className={styles.content}>
                <div className={styles.description}>
                {"MisFit Swarovski Shine Slake Set Activity & Sleep Monitor (Various..."}
                </div>
                <div className={styles.shipping}>Free shipping</div>

                <div className={styles.amountWrapper}>
                <div className={styles.crossedAmount}>$430.99</div>
                <div className={styles.amount}>
                    <span>$</span>
                         242
                    <span>98</span>
                </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.buybutton}>Buy</div>
                </div>
        </div>
        </div>
    )
}

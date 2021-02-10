import React from 'react'
import styles from "./products.module.css";
import prod1 from "../../assets/prod3.png";
export default function Card({isRated,image,description,isFreeShipping,oldAmount,newAmount,paisa,inStock}) {

    return (
        <div className={styles.cardContainer}>
            {
             isRated?
            <div className={styles.toprated}>top rated</div> 
            :
            null
            }
        <div className={styles.imagecontainer}>
            <img className={styles.image} src={image}/>
        </div>
        <div className={styles.content}>
                <div className={styles.description}>
                {description}
                </div>
                    <div className={styles.shipping}>
                {
                    isFreeShipping?
                        "Free shipping"
                        :null
                    }
                    </div>
                {
                    inStock?
                <div className={styles.amountWrapper}>
                <div className={styles.crossedAmount}>{oldAmount}</div>
                <div className={styles.amount}>
                    <span>$</span>
                        {newAmount}
                    <span>{paisa}</span>
                </div>
                </div>
                :null
                }
                <div className={styles.buttonWrapper}>
                    {
                        inStock?
                        <div className={styles.buybutton}>Buy</div>
                        :
                        <div className={styles.outofstock}>Out of stock</div>
                    }
                </div>
        </div>
        </div>
    )
}

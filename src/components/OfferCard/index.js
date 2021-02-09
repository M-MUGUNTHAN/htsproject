import React from 'react'
import styles from "./offercard.module.css";
export default function OfferCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.offerleft}>4 days only - 98 left</div>
            <div className={styles.desp}>KitchenAid Classic 4.5-Qt Stand Mixer</div>
            <div className={styles.amount}>
                <span>$</span>
                     199
                <span>98</span>
            </div>
            <div className={styles.crossed}>$XX,XXX.XX</div>
            <div className={styles.freeship}>FREE SHIPPING</div>
            <div className={styles.content}>why we love it</div>
            <div className={styles.content2}>The Professional Stand Mixer is perfect for heavy, dense mixtures. Mix, knead and whip ingredients
                 into culinary masterpieces.
            </div>
        </div>
    )
}

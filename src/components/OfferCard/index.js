import React from 'react'
import styles from "./offercard.module.css";
export default function OfferCard(props) {
    return (
        <div className={styles.container}>
            <div>4 days only - 98 left</div>
            <div>KitchenAid Classic 4.5-Qt Stand Mixer</div>
            <div><span>$</span>199<span>98</span></div>
            <div>$XX,XXX.XX</div>
            <div>FREE SHIPPING</div>
            <div>why we love it</div>
            <div>The Professional Stand Mixer is perfect for heavy, dense mixtures. Mix, knead and whip ingredients
                 into culinary masterpieces.
            </div>
        </div>
    )
}

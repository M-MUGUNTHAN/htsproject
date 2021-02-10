import React, { useEffect, useState } from 'react'
import styles from "./products.module.css";
import CountButton from './CountButton';

export default function Card({isRated,image,description,isFreeShipping,oldAmount,newAmount,paisa,inStock}) {
    const[count,setCount]=useState(1);
    const[isAdded,setAdded]=useState(false);
    const handlebuy=()=>{
    setAdded(true);
    setCount(1);
   }
   useEffect(()=>{
  if(count===0){
      setAdded(false);
  }
   },[count])
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
                        !isAdded?
                        <div onClick={()=>handlebuy()} className={styles.buybutton}>Buy</div>
                        :
                        <CountButton
                        count={count}
                        setCount={setCount}
                        />
                        :
                        <div className={styles.outofstock}>Out of stock</div>
                    }
                </div>
        </div>
        </div>
    )
}

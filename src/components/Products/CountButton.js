import React from 'react'
import styles from "./products.module.css";
export default function CountButton({count,setCount}) {
    const handleDecrement=()=>{
        if(count>0){
            setCount(pre=>pre-1);
        }
    }
    const handleIncrement=()=>{
            setCount(pre=>pre+1);
    }
    return (
        <div className={styles.countConatiner}>
           <div className={styles.countbutton} onClick={()=>handleDecrement()}>-</div> 
           <div className={styles.count}>{count}</div>
           <div className={styles.countbutton} onClick={()=>handleIncrement()}>+</div>
        </div>
    )
}

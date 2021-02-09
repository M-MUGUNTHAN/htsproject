import React from 'react'
import Checkbox from './Checkbox'
import styles from "./filter.module.css";

export default function Filter(props) {
    return (
        <div className={styles.filtercontainer}>
           <div className={styles.refine}>Refine</div> 
           <div className={styles.wrapper}>
               <div className={styles.clearall}>Clear all selections</div>
               <div className={styles.deptWrapper}>
                <div className={styles.header}>Departments</div>
                <div>Fitness Watches Monitors (20)</div>
                <div>Cell Phone Watches (12)</div>
                <div>Elliptical Machines (15)</div>
                <div>Treadmills (5)</div>
                <div>Exercise Bikes (3)</div>
                <div>Weight Scales (2)</div>
                <div>iPod MP3 Accessories (25)</div>
               </div>
               <div className={styles.brandWrapper}>
                   <div className={styles.header}>Brand</div>
                     <Checkbox name={"FitBit (2)"}/>  
                     <Checkbox name={"Samsung (10)"}/>
                     <Checkbox name={"iFit (3)"}/>
                     <Checkbox name={"LG (8)"}/>
                     <Checkbox name={"Pebble (5)"}/>
                     <Checkbox name={"Apple (3)"}/>
                     <Checkbox name={"Moto 360 (16)"}/>
               </div>
           </div>
        </div>
    )
}

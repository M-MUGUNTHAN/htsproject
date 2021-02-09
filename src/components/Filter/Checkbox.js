import React, { useState } from 'react'
import Tick from '../../assets/Icons/Tick';
import styles from "./filter.module.css";
export default function Checkbox(props) {
    const [checked,setCheck]=useState(false);
    return (
        <div onClick={()=>setCheck(pre=>!pre)}  className={styles.checkboxContainer}>
        <div className={styles.checkboxWrapper}>
          {
              checked?
              <Tick/>
              :null
          }  
        </div>
        <div className={styles.label}>{props.name}</div>
        </div>
    )
}

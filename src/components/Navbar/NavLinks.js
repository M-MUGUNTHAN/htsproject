import React from 'react';
import styles from "./navbar.module.css";
export default function NavLinks(props) {
    return (
      <div className={styles.navlinkContainer}>
        <div className={styles.navlink}>
          {props.name}  
        </div>
      </div>
    )
}

import React from 'react';
import styles from "./header.module.css";
function Header(props) {
    return (
        <div className={styles.header}>
            <div>
            Try <span className={styles.bold}>Prime Membership</span> today
            </div>
            <div className={styles.join}>Join Now</div>
        </div>
    )
}

export default Header


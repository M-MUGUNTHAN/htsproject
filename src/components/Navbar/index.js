import React from 'react'
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import NavLinks from './NavLinks';
import SearchInput from './SearchInput';
import Cart from '../../assets/Icons/Cart';
export default function index(props) {
    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src={logo}/>
            </div>

            <div className={styles.navWrapper}>
                <NavLinks name="SHOP"/>
                <NavLinks name="BUSINESS"/>
                <NavLinks name="SERVICES"/>
                <SearchInput/>
                <NavLinks name="TRACK ORDER"/>
                <NavLinks name="LOG IN"/>
                <div className={styles.cart}>
                    <Cart/>
                </div>
            </div>

        </div>
    )
}

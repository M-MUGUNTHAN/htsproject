import React from 'react'
import SearchIcon from '../../assets/Icons/Search';
import styles from "./navbar.module.css";
export default function SearchInput(props) {
    return (
        <div className={styles.searchWrapper}>
           <SearchIcon/>
           <input
            className={styles.searchInput}
            placeholder="search"
           /> 
        </div>
    )
}

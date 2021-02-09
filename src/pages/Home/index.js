import React from 'react'
import styles from "./home.module.css";
import Header from '../../components/Header'
import Navbar from '../../components/Navbar';
import Filter from '../../components/Filter';
import Products from '../../components/Products';
import BarGraph from '../../components/BarGraph';
import OfferCard from '../../components/OfferCard';
import Footer from '../../components/Footer';
const Home = (props) => {
    return (
        <div className={styles.container}>
          <Header/>  
          <Navbar/>
          <h1>Wearable Technology</h1>
          <div className={styles.wrapper}>
              <Filter/>
            <Products/>
          </div>
          <h1>Buying Trends</h1>
          <div className={styles.wrapper}>
              <BarGraph/>
              <OfferCard/>
          </div>
          <Footer/>
        </div>
    )
}

export default Home

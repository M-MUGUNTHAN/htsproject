import React from 'react'
import RightArrow from '../../assets/Icons/Arrow';
import styles from "./bargraph.module.css";
export default function BarGraph(props) {
    const products=[
        {name:"Moto 360 (20)",percentage:"50%",color:`var(--green)`},
        {name:"iWatch (30)",percentage:"80%",color:`var(--orange)`},
        {name:"Samsung (10)",percentage:"30%",color:`yellow`},
        {name:"LG (5)",percentage:"10%",color:`var(--lightblue)`},
    ]
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {
                    products.map(({name,percentage,color})=>{
                        return(
                            <div style={{width:percentage,background:color}}>{name}</div>
                        );
                    })
                }
            </div>
            <div className={styles.seemore}>
                <div>See more</div>
                <div className={styles.arrowcontainer}><RightArrow/></div>
            </div>
        </div>
    )
}

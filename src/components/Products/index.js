import React from 'react'
import styles from "./products.module.css";
import Card from './Card';
import prod1 from "../../assets/prod2.png"
import prod2 from "../../assets/prod1.png"
import prod3 from "../../assets/prod3.png"
export default function Products(props) {
  const products=[
    {
      isRated:false,
      image:prod1,
      description:"Smart-watch Sweatproof Smart Watch Phone /bluetooth 4.0/Easy connection/ for Apple Iphone...",
      isFreeShipping:false,
      inStock:false,
      oldAmount:"",
      newAmount:"",
      paisa:"",
    },
    
    {
      isRated:true,
      image:prod2,
      description:"MisFit Swarovski Shine Slake Set Activity & Sleep Monitor (Various…",
      isFreeShipping:true,
      inStock:true,
      oldAmount:"$250.98",
      newAmount:"185",
      paisa:"00",
    },
    {
      isRated:true,
      image:prod2,
      description:"MisFit Swarovski Shine Slake Set Activity & Sleep Monitor (Various…",
      isFreeShipping:false,
      inStock:true,
      oldAmount:"$250.98",
      newAmount:"185",
      paisa:"00",
    },
   
    {
      isRated:false,
      image:prod3,
      description:"Samsung Gear 2 Neo Smart Watch - Assorted Colors",
      isFreeShipping:true,
      inStock:true,
      oldAmount:"$430.99",
      newAmount:"242",
      paisa:"98",
    },
    {
      isRated:true,
      image:prod3,
      description:"Motorola Moto 360 - Black Leather Smart Watch",
      isFreeShipping:false,
      inStock:false,
      oldAmount:"",
      newAmount:"",
      paisa:"",
    },
    {
      isRated:true,
      image:prod1,
      description:"LG Watch Urbane Wearable Smart Watch - Pink Gold",
      isFreeShipping:false,
      inStock:true,
      oldAmount:"$480.50",
      newAmount:"270",
      paisa:"98",
    }
  ]
    return (
        <div className={styles.container}>
        {
          products.map((item,index)=>{
            return(
            <Card
            isRated={item.isRated}
            image={item.image}
            description={item.description}
            isFreeShipping={item.isFreeShipping}
            inStock={item.inStock}
            oldAmount={item.oldAmount}
            newAmount={item.newAmount}
            paisa={item.paisa}
            key={index}
            />
            );
          })
        }
          
        </div>
    )
}

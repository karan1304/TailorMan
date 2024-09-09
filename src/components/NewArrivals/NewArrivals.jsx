import React from 'react'
import {Images} from '../../assets/images/index'
import styles from './../../styles/components/NewArrivals/newArrivals.module.scss'
import Card from '../Card/Card'
import { toast } from 'react-toastify';

const NewArrivals = () => {
    const data = [
        {
            IMG : Images.ChikenkariKurta,
            heading:'Chikenkari Kurta',
            discountedPrice:2000,
            actualPrice:2500
        },
        {
            IMG : Images.BlueShirt,
            heading:'Chrochet Navy Blue Shirt',
            discountedPrice:900,
            actualPrice:1200
        },
        {
            IMG : Images.BlueKurta,
            heading:'Short Kurta',
            discountedPrice:500,
            actualPrice:800
        },
        {
            IMG : Images.GreyBlazer,
            heading:'Silk Blazer Off-Brown',
            discountedPrice:3500,
            actualPrice:4000
        },

    ]

    const handleAnchor = (e)=>
        {
            e.preventDefault();
            toast.info("Coming Soon",{autoClose:3000})
        }
  return (
    <>
    <h1 className={styles.heading}>New Arrivals</h1>
   <div className={styles.cardContainer}>
        {
            data && data.map((item, i) => (
                <Card key={i} item={item}/>
            ))
        }
   </div> 
   <div className={styles.all}>
        <a href="#" className={styles.seeAll} onClick={handleAnchor}>see all</a>
   </div>
   </>            
)
}

export default NewArrivals
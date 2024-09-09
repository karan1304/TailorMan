import React from 'react'
import {Images} from '../../assets/images/index'
import styles from './../../styles/components/BestSeller/bestSeller.module.scss'
import Card from '../Card/Card';
import { toast } from 'react-toastify';

const BestSeller = () => {
    const data = [
        {
            IMG : Images.CrochetShirt,
            heading:'White Crochet Shirt',
            discountedPrice:1200,
            actualPrice:2000
        },
        {
            IMG : Images.CargoPants,
            heading:'Cargo Pants',
            discountedPrice:800,
            actualPrice:1500
        },
        {
            IMG : Images.DenimJacket,
            heading:'Denim Jacket',
            discountedPrice:2000,
            actualPrice:3000
        },
        {
            IMG : Images.ClassicOffWhiteBlazer,
            heading:'Classic Off-White Blazer',
            discountedPrice:4500,
            actualPrice:5000
        },

    ]

    const handleAnchor = (e)=>
    {
        e.preventDefault();
        toast.info("Coming Soon",{autoClose:3000})
    }
  return (
    <>
    <h1 className={styles.heading}>Best Sellers</h1>
    <div className={styles.cardContainer}>
        {
            data && data.map((item, i) => (
                <Card key={i} item={item}/>
            ))
        }
   </div> 
   <div className={styles.all}>
        <a href="" className={styles.seeAll} onClick={handleAnchor}>see all</a>
   </div>
   </>            
)
}

export default BestSeller
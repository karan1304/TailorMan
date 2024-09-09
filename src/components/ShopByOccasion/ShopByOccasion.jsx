import React from 'react'
import OccasionCard from '../OccasionCard/OccasionCard'
import styles from './../../styles/components/ShopByOccasion/shopByOccasion.module.scss'
import {Images} from '../../assets/images/index'

const ShopByOccasion = () => {
  const data = [
    {
        IMG : Images.OfficeWear,
        link: 'Office Wear'
    },
    {
        IMG : Images.Tuxedo,
        link :'Wedding Wear',

    },
    {
        IMG : Images.Festiv,
        link: 'Festive Wear',
    },
    {
        IMG : Images.PartyWear,
        link :'Party Wear',
    },

]
  return (
    <>
      <h1 className={styles.heading}>Shop By Occasion</h1>
      <div className={styles.cardContainer}>
        {
          data.map((item, index) => (
            <OccasionCard key={index} item={item}/>
          ))
        }
      </div>
    </>
  )
}

export default ShopByOccasion
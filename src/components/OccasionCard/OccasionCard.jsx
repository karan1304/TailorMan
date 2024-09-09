import React from 'react'
import styles from './../../styles/components/OccasionCard/occasionCard.module.scss'
import {Images} from '../../assets/images/index'
import { toast } from 'react-toastify';

const OccasionCard = ({item}) => {

  const handleAnchor = (e)=>
    {
        e.preventDefault();
        toast.info("Coming Soon",{autoClose:3000})
    }
  return (
    <>
    <div className={styles.card}>
        <img src={item.IMG}/>
        <a href="#" className={styles.cardLink} onClick={handleAnchor}>{item.link}</a>
    </div>
    </>
  )
}

export default OccasionCard
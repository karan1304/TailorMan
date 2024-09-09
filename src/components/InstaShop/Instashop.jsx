import React from 'react'
import {Images} from '../../assets/images/index'
import styles from './../../styles/components/InstaShop/instaShop.module.scss'
import { useState, useEffect } from 'react';

const Instashop = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screen width on window resize
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    // Adding event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
  return (
    <>
    <h1 className={styles.heading}>Instagram</h1>
    <p className={styles.subHeading1}><a href="#" className={styles.tag} >INSTASHOP : </a>Shop from our Instagram!</p>
    <p className={styles.subHeading2}>Tag us: @TailorMan & #john wick to get featured</p>
    <div className={styles.cardContainer}>
      <div className={`${styles.container1} ${styles.container}`}>
        <img src={Images.Insta1} className={styles.img1}/>
      </div>
      <div className={`${styles.container2} ${styles.container}`}>
        <img src={Images.Insta2} className={styles.img2}/>
        <img src={Images.Insta3} className={styles.img3}/>          
      </div>
       <div className={`${styles.container3} ${styles.container}`}>
        <img src={Images.Insta4} className={styles.img4}/>
        <img src={Images.Insta5} className={styles.img5}/>
       </div>
       <div className={`${styles.container4} ${styles.container}`}>
        <img src={Images.Insta6} className={styles.img6}/>
        <img src={Images.Insta7} className={styles.img7}/>
       </div>
        
        
    </div>
    </>
  )
}

export default Instashop
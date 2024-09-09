import React from 'react'
import styles from './../../styles/components/Hero/hero.module.scss'
import {Images} from '../../assets/images/index'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.leftSide}>
            <div className={styles.heroData}>
                <h1 className={styles.brandName}>TailorMan</h1>
                <p className={styles.brandDescription}>Tailorman offers custom-tailored clothing for men, blending craftsmanship with modern technology to create perfectly fitted, personalized garments.</p>
                <div className={styles.socialMediaButtonsContainer}>
                    <a href="#"><img src={Images.Facebook}/></a>
                    <a href="#"><img src={Images.Instagram}/></a>
                    <a href="#"><img src={Images.Twitter}/></a>
                    <a href="#"><img src={Images.Youtube}/></a>
                </div>
            </div>
        </div> 
        <div className={styles.rightSide}>
            <img src={Images.TailorMan}/>
        </div> 
    </div>
    )
}

export default Hero
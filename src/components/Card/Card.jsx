import React from 'react'
import {Images} from '../../assets/images/index'
import styles from './../../styles/components/Card/card.module.scss'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className={styles.card}>
        <img src={item.IMG}/>
        <div className={styles.cardData}>
            <h1 className={styles.heading}>{item.heading}</h1>
            <div className={styles.price}>
                <p className={styles.discountedPrice}>{`Rs ${item.discountedPrice}`}</p><p className={styles.actualPrice}>{`Rs ${item.actualPrice}`}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
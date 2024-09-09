import React from 'react'
import {Images} from '../../assets/images/index'
import styles from './../../styles/components/Footer/footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.col1}>
        <h1 className={styles.listHeading}>TailorMan</h1>
            <ul>
                <li><a href="#" className={styles.office}><img src={Images.Office}/>B.No-2, 3rd floor, silicon valley, California, USA</a></li>
                <li><a href="#" className={styles.mail}><img src={Images.Mail}/>info@tailorman.com</a></li>
                <li><a href="#" className={styles.phone}><img src={Images.Phone}/>+1 234 567 8901</a></li>
            </ul>
        </div>

        <div className={styles.col2}>
            <h1 className={styles.listHeading}>Shop</h1>
            <ul>
                <li><a href="#" className={styles.link}>Shirts</a></li>
                <li><a href="#" className={styles.link}>Trousers</a></li>
                <li><a href="#" className={styles.link}>Kurtas</a></li>
                <li><a href="#" className={styles.link}>Blazers</a></li>
                <li><a href="#" className={styles.link}>Jackets</a></li>

            </ul>
        </div>

        <div className={styles.col3}>
            <h1 className={styles.listHeading}>Information</h1>
            <ul>
                <li><a href="#" className={styles.link}>About us</a></li>
                <li><a href="#" className={styles.link}>Career</a></li>
                <li><a href="#" className={styles.link}>Terms & Conditions</a></li>
                <li><a href="#" className={styles.link}>Privacy Policy</a></li>
                <li><a href="#" className={styles.link}>Blog</a></li>

            </ul>
        </div>
        
        <div className={styles.col4}>
            <h1 className={styles.listHeading}>Customer Services</h1>
            <ul>
                <li><a href="#" className={styles.link}>Contact us</a></li>
                <li><a href="#" className={styles.link}>Track order</a></li>
                <li><a href="#" className={styles.link}>Return order</a></li>
                <li><a href="#" className={styles.link}>Shipping policy</a></li>
                <li><a href="#" className={styles.link}>Warranty policy</a></li>

            </ul>
        </div>

        <div className={styles.col5}>
            <h1 className={styles.listHeading}>Social Links</h1>
            <ul>
                <li><a href="#" className={styles.link}><img src={Images.SCF} className={styles.sl}/></a></li>
                <li><a href="#" className={styles.link}><img src={Images.SCI} className={styles.sl}/></a></li>
                <li><a href="#" className={styles.link}><img src={Images.SCT} className={styles.sl}/></a></li>
                <li><a href="#" className={styles.link}><img src={Images.SCY} className={styles.sl}/></a></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer
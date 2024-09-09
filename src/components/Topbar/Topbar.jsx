import React from 'react'
import styles from './../../styles/components/Topbar/topbar.module.scss'
import {Images} from '../../assets/images/index'
import { useState, useEffect } from 'react';

const Topbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const navigation = ['Home','About','New Arrivals','Instagram','Contact-us'];

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
    <div className={styles.topbar}>
        <div className={styles.logoContainer}>
            <h1 className={styles.logo}>TailorMan</h1>
        </div>
        {
            width > 950 ?
            <>
            <div className={styles.navigation}>
                    <div className={styles.navigationContainer}>
                        {
                            navigation.map((nav,index)=>(<a key={index} className={styles.link}>{nav}</a>))
                        }
                    </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.btns}>Login</button>
                <button className={styles.btns} style={{color:'#ffffff',background:'#1E3D59'}}>Sign Up</button>
                <button className={styles.btns} style={{padding:'0px',border:'none'}}><img src={Images.Cart} style={{width:'40px',height:'40px'}}/></button>
            </div>
            </>
            :
            isMenuOpen?<a className={styles.toggle} onClick={()=>setIsMenuOpen(false)}><img src={Images.ToggleOff}/></a>:<a className={styles.toggle} onClick={()=>setIsMenuOpen(true)}><img src={Images.ToggleOn}/></a>
        }
        
       
    </div>
     {width <= 950 && isMenuOpen &&
     
     <div className={styles.mobileVersion}>
        <div className={styles.navigation}>
                    <div className={styles.navigationContainer}>
                        {
                            navigation.map((nav,index)=>(<a key={index} className={styles.link}>{nav}</a>))
                        }
                    </div>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.btns}>Login</button>
            <button className={styles.btns} style={{color:'#ffffff',background:'#1E3D59'}}>Sign Up</button>
            <button className={styles.btns} style={{padding:'0px',border:'none'}}><img src={Images.Cart} style={{width:'40px',height:'40px'}}/></button>
        </div>
    </div>}
    </>
  )
}

export default Topbar
import React from 'react'
import styles from './../../styles/components/Newsletter/newsLetter.module.scss';
import { toast } from 'react-toastify';


const Newsletter = () => {
  return (
    <>
        <div className={styles.newsletter}>
            <h1 className={styles.heading}>Subscribe to our newsletter</h1>
            <p className={styles.desc}>Signup for our newletter to stay up to date on sales and events</p>
            <form className={styles.form}>
                <input type="email" placeholder="Enter Email Address" />
                <button type="submit" onClick={
                  (e)=>{
                    e.preventDefault();
                    toast.info('Coming Soon')
                  }
                  }>Join</button>
            </form>
            <p className={styles.terms}>*By completing this form you’re signing up to receive our emails and can unsubscribe at any time</p>
        </div>
    </>
  )
}

export default Newsletter
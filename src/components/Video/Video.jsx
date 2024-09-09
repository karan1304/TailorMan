import React from 'react'
import styles from './../../styles/components/Video/video.module.scss'
import {Images} from '../../assets/images/index'

const Video = () => {
  return (
   <div className={styles.videoContainer}>
        <video className={styles.fashionVideo} controls autoPlay loop muted>
            <source src={Images.MensFashionVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
   </div>
  )
}

export default Video
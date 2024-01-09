// import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={`${styles.hero} flex align-middle items-center`}>
        <div className={`w-full`}>

            <div className={`flex justify-center`}>
                <div className={` ${styles.hero_title}`}>
                    Make requests, Get Answers, Foster Transparency and Trust
                </div>
            </div>
            <div className={` ${styles.hero_signup_text} flex justify-center`}>
                 Sign up and experience the power of citizen engagement
            </div>
            <div className={` flex justify-center gap-4`}>
                <Link className={`${styles.hero_join_brand}`} to = '/'>Join as Brand</Link>
                <Link className={`${styles.hero_join_creator}`} to = '/'>Join as Creator</Link>
            </div>
        </div>
    </div>
  )
}



import styles from './PopularBrands.module.css'
import images from '../../assets'



export default function PopularBrands() {
  return (
    <div className={`${styles.popular_brands}`}>
      <div className={`${styles.popular_brands_title}`}>Popular  Brands we have helped grow</div>
      <div className={`${styles.popular_brands_text}`}>View collaborations from brands like AGI, Elife, Figma, and more.</div>

      {/* brands */}
      <div className={`${styles.brand_images} flex justify-center`}>
        <div className={`${styles.Digikala}`}></div>
        <div className={`${styles.Motor_Talk}`}></div>
        <div className={`${styles.Digikala}`}></div>
        <div className={`${styles.Motor_Talk}`}></div>
      </div>
    </div>
  )
}

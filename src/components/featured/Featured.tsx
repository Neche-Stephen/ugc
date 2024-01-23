
import styles from './Featured.module.css';

import FeaturedCard from './featuredCard/FeaturedCard';

export default function Featured() {
  return (
    <div className={`${styles.featured} wrapper`}>
        <div className={`${styles.featured_text}`}>
            Featured
        </div>
        <div className={`${styles.hire}`}>
            Hire top influencers across all platforms
        </div>
        <div className={`${styles.featured_card_row} flex justify-between`}>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />

        </div>
    </div>
  )
}

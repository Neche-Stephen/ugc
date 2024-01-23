import styles from './TopInfluencers.module.css';
import TopInfluencersCard from './topInfluencersCard/TopInfluencersCard';

export default function TopInfluencers() {
  return (
    <div className={`wrapper ${styles.top_influencers}`}>
      <div className={`${styles.top_influencers_title}`}>
        Top Influencers
      </div>
      <div className={`${styles.top_influencers_text_see_all} flex justify-between`}>
        <div className={`${styles.top_influencers_text}`}>
          Hire top influencers across all platforms
        </div>
        <div className={`${styles.top_influencers_see_all}`}>
          See all
        </div>

      </div>
      <div className={`${styles.top_influencers_card_row} flex justify-between`}>
          <TopInfluencersCard />
          <TopInfluencersCard />
          <TopInfluencersCard />
          <TopInfluencersCard />
          
        </div>
    </div>
  )
}

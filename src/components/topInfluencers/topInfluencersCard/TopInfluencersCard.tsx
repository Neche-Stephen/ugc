
import styles from './TopInfluencersCard.module.css';

import feature_bg from '../../../assets/images/featured_bg.png';
import star from '../../../assets/images/star.svg';
import check from '../../../assets/images/Check.svg';
import feature_img from '../../../assets/images/featured_img.png';




export default function TopInfluencersCard() {
  return (
    <div className={`${styles.topInfluencers_card}`}>
      <div>
          <img src={feature_bg} alt="" />
      </div>
      <div>
        <img src={feature_img} alt="" className={`${styles.feature_img}`} />
      </div>
      <div className={`${styles.topInfluencers_profile}`}>
        <div className={`flex justify-end`}>
          <div className={`${styles.following}`}>
            following
          </div>
        </div>
        <div className={`${styles.name_check} flex gap-0.5`}>
           <div> Janet Okwuchukwu</div>
           <img src={star} alt="" />
           <img src={check} alt="" className={`${styles.check}`} />
        </div>
        <div className={`${styles.content_creator}`}>
          Youtube Content Creator
        </div>
       <div className={`${styles.last_topInfluencers_card_row} flex items-center`}>
        <div className={`${styles.rating} flex items-center`}>
              <div className={`${styles.work_rating}`}>Work Rating:</div>
              <div className={`flex items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#F1BE3B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#F1BE3B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#F1BE3B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#F1BE3B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#D9D9D9"/>
                </svg>
              </div>
          </div>
          <div className={`${styles.message} flex items-center `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                <path d="M18.5781 3.92919C15.6398 2.0216 11.7345 1.58739 8.49022 2.16271C4.86061 -1.27719 0.793297 0.305031 0 0.759881C0 0.759881 2.79124 3.09042 2.33788 5.13162C-0.966699 8.44167 0.604235 12.127 2.33788 13.8672C2.79124 15.9084 0 18.239 0 18.239C0.785658 18.6953 4.8419 20.2726 8.49022 16.8504C11.7272 17.422 15.6326 16.9915 18.5781 15.0805C23.1332 12.2231 23.1481 6.80128 18.5781 3.92882V3.92919ZM11.236 15.0621C10.1001 15.0653 8.96862 14.9219 7.87071 14.6354L7.11561 15.3519C6.69618 15.7515 6.22654 16.097 5.71808 16.3798C5.10118 16.685 4.43102 16.8725 3.74305 16.9326C3.78124 16.8658 3.81485 16.799 3.84885 16.7359C4.60433 15.3599 4.80803 14.1253 4.45995 13.0322C3.21749 12.0711 2.47385 10.8428 2.47385 9.49961C2.47385 6.42224 6.39794 3.92919 11.236 3.92919C16.0741 3.92919 19.9982 6.42224 19.9982 9.49961C19.9982 12.577 16.0741 15.0621 11.236 15.0621ZM7.03234 10.8244C6.68546 10.8292 6.35078 10.6987 6.10164 10.4615C5.8525 10.2243 5.70921 9.89972 5.70318 9.5589C5.67645 7.85546 8.2939 7.81831 8.32026 9.51799V9.53713C8.32187 9.70483 8.28982 9.87118 8.22595 10.0267C8.16208 10.1822 8.06764 10.3238 7.94802 10.4435C7.82841 10.5631 7.68597 10.6584 7.52885 10.7238C7.37173 10.7893 7.20301 10.8238 7.03234 10.8251V10.8244ZM9.84994 9.5589C9.81977 7.85546 12.4372 7.81456 12.4674 9.51424V9.53713C12.4823 11.2289 9.88012 11.2473 9.84994 9.5589ZM15.3262 10.8244C14.9793 10.8292 14.6446 10.6987 14.3954 10.4615C14.1462 10.2243 14.0028 9.89976 13.9967 9.5589C13.9703 7.85546 16.5878 7.81831 16.6142 9.51799V9.53713C16.6163 9.70497 16.5847 9.87158 16.521 10.0273C16.4573 10.1831 16.3629 10.3249 16.2432 10.4447C16.1235 10.5644 15.9808 10.6597 15.8234 10.725C15.666 10.7903 15.4971 10.8243 15.3262 10.8251V10.8244Z" fill="#2B791E"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 8.33887C12.4711 8.33887 13.6613 9.52906 13.6613 11.0002C13.6613 12.4713 12.4711 13.6615 11 13.6615C9.5289 13.6615 8.33871 12.4713 8.33871 11.0002C8.33871 9.52906 9.5289 8.33887 11 8.33887ZM8.33871 4.49479C8.33871 5.96589 9.5289 7.15608 11 7.15608C12.4711 7.15608 13.6613 5.96589 13.6613 4.49479C13.6613 3.02368 12.4711 1.8335 11 1.8335C9.5289 1.8335 8.33871 3.02368 8.33871 4.49479ZM8.33871 17.5055C8.33871 18.9766 9.5289 20.1668 11 20.1668C12.4711 20.1668 13.6613 18.9766 13.6613 17.5055C13.6613 16.0344 12.4711 14.8442 11 14.8442C9.5289 14.8442 8.33871 16.0344 8.33871 17.5055Z" fill="#2B791E"/>
              </svg>
          </div>
       </div>
      </div>
    </div>
  )
}

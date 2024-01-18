
import styles from './UgcWorks.module.css'

import images from "../../assets";

export default function UgcWorks() {
  return (
    <div className={`${styles.ugcworks}`}>
        <div className={`${styles.ugcworks_title}`}>
            How UGC Works
        </div>
        <div className={`${styles.ugcworks_text}`}>
            Everything you need to run your influencer campaigns, and more.
        </div>
       <div className={`flex justify-center`} style={{gap:'23px', flexWrap:'wrap'}}>
            <div className={`${styles.cost_effective}`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M18.0666 22.5669H15.5666C13.6499 22.5669 12.0999 20.9669 12.0999 18.9836C12.0999 18.3002 12.6666 17.7336 13.3499 17.7336C14.0333 17.7336 14.5999 18.3002 14.5999 18.9836C14.5999 19.5836 15.0333 20.0669 15.5666 20.0669H18.0666C18.4499 20.0669 18.7499 19.7169 18.7499 19.2836C18.7499 18.7002 18.6499 18.6669 18.2666 18.5336L14.2499 17.1336C12.7999 16.6336 12.0833 15.6169 12.0833 14.0336C12.0833 12.2336 13.5166 10.7502 15.2666 10.7502H17.7666C19.6833 10.7502 21.2333 12.3502 21.2333 14.3336C21.2333 15.0169 20.6666 15.5836 19.9833 15.5836C19.2999 15.5836 18.7333 15.0169 18.7333 14.3336C18.7333 13.7336 18.2999 13.2502 17.7666 13.2502H15.2666C14.8833 13.2502 14.5833 13.6002 14.5833 14.0336C14.5833 14.6169 14.6833 14.6502 15.0666 14.7836L19.0833 16.1836C20.5333 16.7002 21.2333 17.7169 21.2333 19.2836C21.2499 21.1002 19.8166 22.5669 18.0666 22.5669Z" fill="#2B791E"/>
                        <path d="M16.6667 23.9001C15.9834 23.9001 15.4167 23.3334 15.4167 22.6501V21.4167C15.4167 20.7334 15.9834 20.1667 16.6667 20.1667C17.3501 20.1667 17.9167 20.7334 17.9167 21.4167V22.6501C17.9167 23.3501 17.3501 23.9001 16.6667 23.9001Z" fill="#2B791E"/>
                        <path d="M16.6667 13.2336C15.9834 13.2336 15.4167 12.6669 15.4167 11.9836V10.6836C15.4167 10.0003 15.9834 9.43359 16.6667 9.43359C17.3501 9.43359 17.9167 10.0003 17.9167 10.6836V11.9836C17.9167 12.6669 17.3501 13.2336 16.6667 13.2336Z" fill="#2B791E"/>
                        <path d="M16.6499 31.2004C8.61658 31.2004 2.08325 24.6671 2.08325 16.6338C2.08325 8.60047 8.61658 2.06714 16.6499 2.06714C24.6833 2.06714 31.2166 8.60047 31.2166 16.6338C31.2166 24.6671 24.6666 31.2004 16.6499 31.2004ZM16.6499 4.58381C9.99992 4.58381 4.58325 10.0005 4.58325 16.6505C4.58325 23.3004 9.99992 28.7004 16.6499 28.7004C23.2999 28.7004 28.7166 23.2838 28.7166 16.6338C28.7166 9.98381 23.2999 4.58381 16.6499 4.58381Z" fill="#2B791E"/>
                        <path d="M28.3649 37.8664C25.2816 37.8664 22.3816 36.3664 20.5982 33.8331C20.1982 33.2664 20.3316 32.4831 20.8982 32.0831C21.4649 31.6831 22.2482 31.8164 22.6482 32.3831C23.9649 34.2497 26.0982 35.3497 28.3649 35.3497C32.2316 35.3497 35.3649 32.2164 35.3649 28.3497C35.3649 26.0997 34.2649 23.9664 32.4316 22.6497C31.8649 22.2497 31.7482 21.4664 32.1482 20.8997C32.5482 20.3331 33.3316 20.2164 33.8982 20.6164C36.3816 22.3997 37.8649 25.2831 37.8649 28.3497C37.8649 33.6164 33.6149 37.8664 28.3649 37.8664Z" fill="#2B791E"/>
                    </svg>
                </div>
                <div className={`${styles.cost_effective_title}`}>Cost Effective</div>
                <div className={`${styles.cost_effective_text}`}>Search influencers for free. No subscriptions, contracts or hidden fees.</div>
            </div>
            <div className={`${styles.secured}`}>
                <div>
                <img src={images.security_user1} alt="" />
                </div>
                <div className={`${styles.secured_title}`}>Secured</div>
                <div className={`${styles.secured_text}`}>Every influencer is vetted by us. Always receive high-quality, professional content</div>
            </div>
            <div className={`${styles.chat}`}>
                <div>
                <img src={images.message1} alt="" />
                </div>
                <div className={`${styles.chat_title}`}>Chat</div>
                <div className={`${styles.chat_text}`}>Instantly chat with influencers and stay in touch throughout the whole transaction</div>
            </div>
            <div className={`${styles.quick_pay}`}>
                <div>
                <img src={images.security_user1} alt="" />
                </div>
                <div className={`${styles.quick_pay_title}`}>Quick Payments</div>
                <div className={`${styles.quick_pay_text}`}>Your money is held safely until you approve the influencer’s work and our payment gateway is safe.</div>
            </div>
       </div>
    </div>
  )
}

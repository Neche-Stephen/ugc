
import styles from './Search.module.css'

export default function Search() {
  return (
    <div className={`${styles.search} flex`}>
        <div className={`w-full`}>
            <div className={`${styles.browse_search} flex justify-center`}>
                Browse and Search Requests
            </div>
            <div className={`flex justify-center`}>
                <div className={`${styles.find_hire}`}>Find and hire top Instagram, TikTok, YouTube, and UGC influencers to create unique content for your brand</div>
            </div>

            {/* <div className={`flex items-center border border-gray-300 rounded-lg overflow-hidden`}>
              <span className="bg-gray-200 py-2 px-3 text-gray-700 font-medium">
                Select a platform
              </span>

              <div className="border-l border-gray-300 h-8" />

              <input type="text" className="flex-grow py-2 px-3 focus:outline-none" placeholder="Enter your search" />

              <div className="bg-gray-200 px-3">
                <svg className="text-gray-500 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-5.2-5.2m.35-5.61A8.5 8.5 0 1112 4.5a8.5 8.5 0 018.15 11.89z" />
                </svg>
              </div>
            </div> */}

        </div>
    </div>
  )
}

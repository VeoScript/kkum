import Link from 'next/link'
import Like from '~/components/Icons/Reactions/Like'
import Unlike from '~/components/Icons/Reactions/Unlike'

export default function HomeContent({ getUser }) {
  return (
    <div className="flex flex-row w-full h-full space-x-5">
      {/* Left Side Display */}
      <div className="left flex flex-col justify-between w-full max-w-[16rem] h-full max-h-[22rem] rounded-lg shadow-xl bg-kkum-mid overflow-hidden">
        <img className="w-full h-28 bg-kkum-dark bg-opacity-30 object-cover" src="https://66.media.tumblr.com/2968b8444c8881c95f8ca9daddd904e7/tumblr_pjriexfpog1r85hlio3_500.png" />
        <div className="relative">
          <div className="absolute inset-0 top-[-5rem] left-5">
            <img className="w-20 h-20 border-4 border-kkum-mid rounded-full object-cover bg-kkum-mid" src={getUser.image} />
          </div>
          <div className="flex flex-col px-6 mt-1 w-full space-y-3">
            <div className="flex flex-col w-full">
              <h1 className="font-semibold text-base text-gray-200">{ getUser.name }</h1>
              <h3 className="font-light text-xs text-gray-400">{ getUser.bio }</h3>
            </div>
            <div className="flex flex-col w-full pt-3 font-normal text-xs text-gray-400 space-y-1">
              <div className="flex flex-row items-center justify-between w-full">
                <h1>Dreams</h1>
                <h1 className="font-bold text-normal text-kkum-khaki">13</h1>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <h1>Followers</h1>
                <h1 className="font-bold text-normal text-kkum-khaki">99</h1>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <h1>Following</h1>
                <h1 className="font-bold text-normal text-kkum-khaki">560</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center text-sm text-gray-400">
          <Link href="/profile">
            <a className="flex flex-row items-center justify-center w-full px-3 py-3 space-x-2 bg-kkum-dark bg-opacity-50 hover:bg-opacity-30">
              <svg className="w-4 h-4 text-kkum-khaki" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>My Account</span>
            </a>
          </Link>
          <hr className="h-6 border-l-2 border-kkum-mid" />
          <Link href="/home">
            <a className="flex flex-row items-center justify-center w-full px-3 py-3 space-x-2 bg-kkum-dark bg-opacity-50 hover:bg-opacity-30">
              <svg className="w-4 h-4 text-kkum-khaki" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span>Dreams</span>
            </a>
          </Link>
        </div>
      </div>
      {/* Center Display */}
      <div className="center flex flex-col w-full max-w-full space-y-3 overflow-y-auto pb-20">
        {/* Create Post Card Display */}
        <div className="write flex flex-col w-full rounded-lg shadow-xl bg-kkum-mid">
          <div className="flex flex-row w-full space-x-3 px-5 py-3">
            <img className="w-10 h-10 object-cover rounded-full bg-kkum-dark" src={getUser.image} />
            <article
              className="w-full h-full bg-kkum-mid text-base cursor-text focus:outline-none resize-none py-2"
              contentEditable
              placeholder="Share your dreams, anxiety or depressions..."
            />
            <button>
              <svg className="w-6 h-6 text-gray-400 hover:text-kkum-khaki" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
          <hr className="border-t border-kkum-dark" />
          <div className="flex flex-row items-center justify-end w-full">
            <button className="w-full max-w-[8rem] py-3 text-sm bg-kkum-dark bg-opacity-50 hover:bg-opacity-30">
              Post
            </button>
          </div>
        </div>
        {/* Users Post Card Display */}
        <div className="postcard flex flex-col w-full rounded-lg shadow-xl bg-kkum-mid">
          <div className="flex flex-row items-center justify-between w-full px-5 py-3">
            <div className="flex flex-row items-center space-x-2">
              <img className="w-10 h-10 object-cover rounded-full bg-kkum-dark" src={getUser.image} />
              <div className="flex flex-col -space-y-1">
                <h1 className="font-semibold text-base text-gray-300">{getUser.name}</h1>
                <h3 className="font-light text-sm text-gray-400">{getUser.username}</h3>
              </div>
            </div>
            <button className="flex flex-row">
              <Unlike />
            </button>
          </div>
          <div className="flex flex-row w-full px-5 font-light text-sm text-gray-300">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed deserunt hic est, ratione saepe facilis dolorum consequatur exercitationem numquam? Omnis laboriosam aliquid temporibus, similique quidem ratione. Animi, tempora amet?</span>
          </div>
          <div className="flex flex-row w-full px-5 py-3 font-light text-sm text-gray-300 space-x-3">
            <span className="flex text-xs space-x-1">
              <span className="text-kkum-khaki">33</span>
              <span className="text-gray-400">Hearts</span>
            </span>
            <span className="flex text-xs space-x-1">
              <span className="text-kkum-khaki">0</span>
              <span className="text-gray-400">Comments</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
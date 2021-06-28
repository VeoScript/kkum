export default function HomeContent({ getUser }) {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="left flex flex-col w-full max-w-xs h-full max-h-[30rem] rounded-lg bg-kkum-mid overflow-hidden">
        <img className="w-full h-28 bg-kkum-dark bg-opacity-30 object-cover" src="https://66.media.tumblr.com/2968b8444c8881c95f8ca9daddd904e7/tumblr_pjriexfpog1r85hlio3_500.png" />
        <div className="relative">
          <div className="absolute inset-0 -top-8 left-5">
            <img className="w-20 h-20 border-4 border-kkum-mid rounded-full object-cover bg-kkum-mid" src={getUser.image} />
          </div>
        </div>
        <div className="flex flex-col mt-14 px-6 w-full space-y-3">
          <div className="flex flex-col w-full">
            <h1 className="font-semibold text-base text-gray-400">{ getUser.name }</h1>
            <h3 className="font-light text-xs text-gray-400">{ getUser.bio }</h3>
          </div>
          <div className="flex flex-col w-full font-normal text-sm">
            <div className="flex flex-row items-center justify-between w-full">
              <h1>Dreams</h1>
              <h1>13</h1>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <h1>Followers</h1>
              <h1>99</h1>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <h1>Following</h1>
              <h1>12</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
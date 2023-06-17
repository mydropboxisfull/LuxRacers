import React from 'react'

function GifBannerMobile() {
  return (
    <div className="w-screen mt-[-5rem] pb-[8rem] bg-black">
      <div className="md:hidden">
        <img src="bannergif.gif" className="w-full" />
      </div>
    </div>
  )
}

export default GifBannerMobile
import React from 'react'

const OtBanner = () => {
  return (
    <div className='bg-black md:mx-14 px-20 rounded-sm py-16 flex items-center justify-between'>
        <img src="/images/otphone.png" alt="img" />

        <h1 className='text-2xl text-slate-500 font-semibold'>The Lowest Prices Once A Month! Hurry To Snap Up</h1>

        <span className="px-5 py-2 rounded border-2 text-white uppercase hover:text-slate-400 cursor-pointer" >Shop now</span>
    </div>
  )
}

export default OtBanner
import React from 'react'

export default function LiveCount() {
  return (
    <div className='flex flex-row gap-3 h-full items-center'>
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-special-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-special-gold"></span>
      </span>
      <div><span className='dark:text-dark-100 font-bold text-dark-600'>132</span> <span className='text-dark-300'>Online</span></div>
    </div>
  )
}

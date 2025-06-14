import React from 'react'

const Button = ({ tital, id, righticon, lefticon, containerClass }) => {
  return (
    <button 
      id={id} 
      className={`group relative z-10 w-fit inline-flex cursor-pointer overflow-hidden rounded-full bg-yellow-300 px-7 py-3 text-black ${containerClass}`}
    >
      {lefticon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>
          {tital}
        </div>
      </span>
      {righticon}
    </button>
  )
}

export default Button 
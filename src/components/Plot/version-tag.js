import * as React from 'react'

function VersionTag({ className }) {

  return (
    <div className={`${className || ""} 
      opacity-30
      p-1 sm:p-2 bg-white rounded `}>
      <div className="text-xs text-right text-black md:text-sm">
        Version 2.1, March 2022
      </div>
      <div className="hidden sm:block text-xs text-right text-black md:text-sm">
        By Chu Ding, Benjamin Schafer
      </div>
    </div>
  )
}

export default VersionTag
import * as React from 'react'

function VersionTag({ className }) {

  return (
    <div className={`${className || ""} p-1 sm:p-2 border border-gray-400 bg-white rounded `}>
      <div className="text-sm text-right text-gray-500 sm:text-base">
        Version 1.0, July 2021
      </div>
      <div className="text-xs text-right text-gray-500 sm:text-base">
        By Chu Ding, Benjamin Schafer
      </div>
    </div>
  )
}

export default VersionTag
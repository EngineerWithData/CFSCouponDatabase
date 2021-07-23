import * as React from 'react'

function VersionTag({ className }) {

  return (
    <div className={`${className || ""} p-2`}>
      <div className="text-right text-gray-600">
        Version 1.0
      </div>
      <div className="text-right text-gray-600">
        By Chu Ding, Benjamin Schafer
      </div>
    </div>
  )
}

export default VersionTag
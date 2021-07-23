import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function NSFDisclaimer() {

  return (
    <div className="mx-6 flex gap-4">
      <StaticImage
        src="../../images/NSF-logo.png"
        alt="NSF logo"
        className="w-12 h-12"
      />
      <div className="text-gray-500">
        Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.
      </div>
    </div>
  )

}

export default  NSFDisclaimer
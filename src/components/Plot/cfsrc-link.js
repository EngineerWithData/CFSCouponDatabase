import * as React from 'react';

function CFSRCLink( { className }) {

  return (
    <a
      href="https://www.ce.jhu.edu/bschafer/"
      className={`${className} animate-bounce border text-gray-400 px-2 py-0.5`}
    >
      Provided by CFSRC-JHU
    </a>
  );

}

export default CFSRCLink;
import * as React from 'react'
import RefData from '../../../content/references.yaml';
import ReferenceEntry from "./reference-entry"

function References() {

  return (
    <div
      id="references"
      className="bg-gray-100 mx-4 mb-8 py-4 rounded grid grid-cols-2 gap-2"
    >
      {RefData.content.map(data => {
        return (<ReferenceEntry text={data.item} />);
      })}
    </div>
  );
}

export default References;
import * as React from 'react';
import TeamCard from "./team-card"
import AboutCard from "./about-card"
import NSFDisclaimer from "./nsf-disclaimer"

function NextGenSteel({ className }) {

  return (
    <div className={`${className || ""} mt-2 mb-4`} id="nextgensteel">
      <h1 className="text-center text-4xl font-black text-gray-800 ">
        Next Generation Construction Steel
      </h1>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <AboutCard />
        <TeamCard />
      </div>
      <NSFDisclaimer />
    </div>
  );
}

export default NextGenSteel;
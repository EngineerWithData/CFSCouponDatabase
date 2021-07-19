import * as React from 'react'
import YAMLData from '../../content/about.yaml'

function About() {

  return (
    <div id="about">
      <h1 className="font-bold text-2xl mx-4 my-4">
        {YAMLData.title}
      </h1>
      <p className="mx-4">
        {YAMLData.content}
      </p>
    </div>
  )

}

export default About
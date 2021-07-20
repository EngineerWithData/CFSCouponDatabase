import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../../data/all-data.json"
import DataPlayground from "../components/data-playground"
import { useState } from "react"
import NavigationBar from "../components/navigation-bar"

function IndexPage() {

  const [isMetric, setIsMetric] = useState(false);

  return (
    <Layout
      navigation={(
        <NavigationBar
          useMetric={{enabled: isMetric, onChange: () => setIsMetric(!isMetric)}}
        />)}
    >
      <Seo title="Playground" />
      <DataPlayground dataSet={JSONData} isMetric={isMetric}/>
    </Layout>
  )
}

export default IndexPage

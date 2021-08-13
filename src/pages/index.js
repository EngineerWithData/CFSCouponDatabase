import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import CurveData from "../../data/all-data.json"
import SpaceData from "../../data/space-only.json"
import DataPlayground from "../components/Plot/data-playground"
import { useState } from "react"
import NavigationBar from "../components/Navigation/navigation-bar"
import References from "../components/References/references"
import NextGenSteel from "../components/NextGenSteel/next-gen-steel"

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
      <DataPlayground preData={SpaceData} dataSet={CurveData} isMetric={isMetric}/>
      <References />
      <NextGenSteel />
    </Layout>
  )
}

export default IndexPage

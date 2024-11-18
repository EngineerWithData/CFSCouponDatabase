import * as React from "react"

import Layout from "../components/Layout/layout"
import CurveData from "../../data/curve-only.json"
import SpaceData from "../../data/space-only.json"
import DataPlayground from "../components/Plot/data-playground"
import { useState } from "react"
import NavigationBar from "../components/Navigation/navigation-bar"
import References from "../components/References/references"
import NextGenSteel from "../components/NextGenSteel/next-gen-steel"
import { Helmet } from "react-helmet"

function IndexPage() {

  const [isMetric, setIsMetric] = useState(false);

  return (
    <Layout
      navigation={(
        <NavigationBar
          useMetric={{enabled: isMetric, onChange: () => setIsMetric(!isMetric)}}
        />)}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>CFS Material Database</title>
        <link rel="canonical" href="http://cfs-database.com" />
      </Helmet>
      <DataPlayground preData={SpaceData} dataSet={CurveData} isMetric={isMetric}/>
      <References />
      <NextGenSteel />
    </Layout>
  )
}

export default IndexPage

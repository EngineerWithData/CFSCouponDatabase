import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../../content/all-data.json"
import DataPlayground from "../components/data-playground"

function IndexPage() {


  return (
    <Layout>
      <Seo title="Home" />
      <h2 className="text-red-500">Data Playground</h2>
      <DataPlayground dataSet={JSONData}/>
    </Layout>
  )
}

export default IndexPage

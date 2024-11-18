import * as React from "react"

import Layout from "../components/Layout/layout"
import DataPlayground from "../components/Plot/data-playground"
import { useState } from "react"
import NavigationBar from "../components/Navigation/navigation-bar"
import References from "../components/References/references"
import NextGenSteel from "../components/NextGenSteel/next-gen-steel"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

const loadData = async (url) => {  
  try {
    const fullUrl = process.env.NODE_ENV === 'production' ? withPrefix(url) : url;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log('Data loaded:', jsonData);
    return jsonData; // Return the data if you need to use it outside the function
  } catch (error) {
    console.error('Error fetching the JSON data:', error);
  }
};

function IndexPage() {

  const [isMetric, setIsMetric] = useState(false);
  const [CurveData, setCurveData] = useState([]);
  const [SpaceData, setSpaceData] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const curveData = await loadData("/data/curve-only.json");
      const spaceData = await loadData("/data/space-only.json");
      setCurveData(curveData);
      setSpaceData(spaceData);
    };

    fetchData();
  }, [])

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

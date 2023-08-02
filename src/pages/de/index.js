import * as React from "react"
import { Layout , Home} from "../../components"

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Home languaje={'de'}/>
    </Layout>
  )
}

export default IndexPage


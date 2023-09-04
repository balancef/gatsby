import * as React from "react"
import { Layout , Contact} from "../components"

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";

const ContactPage = () => {
  return (
    <Layout>
      <Contact/>
    </Layout>
  )
}

export default ContactPage
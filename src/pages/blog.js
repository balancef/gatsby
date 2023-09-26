import * as React from "react"
import { Layout } from "../components"
import Articles from "../components/Articles/Articles";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";

const Blog = () => {
  return (
    <Layout>
      <Articles />
    </Layout>
  )
}

export default Blog;
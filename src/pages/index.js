import React from "react"

import Layout from "components/layout"
import Image from "components/image"
import { Wrapper } from "components/UI/wrappers"
import SEO from "components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper isMain >
      Home Page
    </Wrapper>
  </Layout>
)

export default IndexPage

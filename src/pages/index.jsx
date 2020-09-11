import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import BackgroundSection from "../components/background-section"

import SEO from "../components/seo"



const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        fluid={data.file.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: { eq: "main-image.webp" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage

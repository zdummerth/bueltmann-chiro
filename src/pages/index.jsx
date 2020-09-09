import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ImgWrapper = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`


const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ImgWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImgWrapper>
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

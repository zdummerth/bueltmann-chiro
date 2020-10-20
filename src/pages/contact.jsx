import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const BgWrapper = styled.div`
    position: relative;
    color: white;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.5);
`
const TextWrapper = styled.div`
    text-align: center;
    margin: 20vh auto 0;
    width: 90%;

    @media (min-width: 500px) {
        font-size: 1.5rem;;
      }

`

const ContactPage = ({data}) => {
    return (
        <Layout>
            <SEO title='Contact' />
            <BgWrapper>
                <Img 
                    fluid={data.file.childImageSharp.fluid} 
                    alt={'bone basket background'}
                    style={{
                        //Not exactly sure how this works, but this makes the image appear bigger and more center on smaller screens
                        // paddingTop: '100px',
                    }}
                />
                <Overlay>
                    <TextWrapper>
                        <p>(314) 346-6822</p>
                        <p>bueltmannchiropractic@gmail.com</p>
                    </TextWrapper>
                </Overlay>
            </BgWrapper>
        </Layout>
    )
}

export const query = graphql`
query {
  file(relativePath: { eq: "desk.webp" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default ContactPage

import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BasicForm from '../components/form'

import BackgroundSection from '../components/background-section'


import { breakpoints, colors } from '../utils/styles'


const Container = styled.div`

  @media (min-width: ${breakpoints.desktop}) {

  }
`


const StyledForm = styled(BasicForm)`
  margin-bottom: 20px;
  padding: 1rem;
`

const TextWrapper = styled.div`
  text-align: center;
  background: ${colors.lightTeal};
  padding: 2rem;
  @media (min-width: 500px) {
    }

`

const ContactPage = ({data}) => {
    return (
        <Layout>
            <SEO title='Contact' />
            <Container>
              <TextWrapper>
                <h1>Contact Us</h1>
                <p>4600 S. Lindbergh Suite 2, St. Louis, MO 63127</p>
                <p>(314) 346-6822</p>
                <p>bueltmannchiropractic@gmail.com</p>
              </TextWrapper>
              <StyledForm />
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "mailboxes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage

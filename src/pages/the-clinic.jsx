import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import SlideShow from '../components/slideshow'

import styled, { createGlobalStyle } from "styled-components"
import { breakpoints, colors } from '../utils/styles'

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: ${props => (props.open ? "hidden" : "")};
    height: ${props => (props.open ? "100vh" : "")};
  }
`

const Container = styled.div`
  h1 {
    margin: 0;
    padding-top: 10px;
  }
`

const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 3rem 0;
  

  & > * {
    flex: 1;
  }


  .text-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.lightest};
  }


  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    max-width: 950px;
  }
`
const OfficeTour = styled.div`
  text-align: center;
  background: ${colors.lightest};
  padding-top: .5rem;
  padding-bottom: 50px;
  margin-top: 1rem;
`

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  max-width: 950px;
  margin: 0 auto;
  background: ${colors.lightGrey};
  padding: 2rem 0;

  & > * {
    width: 150px;
    height: 150px;
    margin: .2rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    & > * {
      width: 200px;
      height: 200px;
      margin: .2rem;
    }
  }
`

const Thumbnail = styled.button`
  width: 150px;
  height: 150px;
  margin: .2rem;
  border: none;
  outline: 0;
  background: none;

  @media (min-width: ${breakpoints.tablet}) {
      width: 200px;
      height: 200px;
      margin: .2rem;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`


const Clinic = ({ data }) => {

  const [ isSlideShowOpen, setIsSlideshowOpen ] = useState(false)
  const [ startingIndex, setStartingIndex ] = useState(0)

  const handleClick = index => {
    setIsSlideshowOpen(true)
    setStartingIndex(index)
  }

  const officeImages = data.officeTour.edges.map(({ node }, ind) => {
    return (
      <Thumbnail onClick={() => handleClick(ind)}>
        <Img 
          fluid={node.childImageSharp.fluid}
          />
      </Thumbnail>
    )
  })
  return (
    <Layout>
      <GlobalStyle open={isSlideShowOpen}/>
      <SEO title="Clinic" />
      <Container>
        <div className='full-width-bg center-text'>
          <h1>The Clinic</h1>
          <ImageAndTextContainer>
              <Img 
                  fluid={data.patientBack.childImageSharp.fluid} 
                  alt={'background image of doctor with patient'}
                  className='our-practice-image'
              />
              <div className='text-container'>
                <h2>Our Practice</h2>
                <p>
                  At Bueltmann Chiropractic, we’re committed to providing you and your 
                  loved ones with exceptional care in a compassionate and friendly atmosphere. 
                  Located in Sunset Hills in St. Louis, Bueltmann Chiropractic believes that 
                  our patients deserve the best care, and we make an 
                  effort to make sure you always feel welcome and at ease.
                </p>
                <p>
                  Whether you’re coming in for a simple checkup or a more complex treatment regimen, 
                  we have the skills and resources to manage all your health needs. 
                  We can’t wait to help you feel better today.
                </p>
              </div>
          </ImageAndTextContainer>
        </div>
        <OfficeTour>
          <h2>Office Tour</h2>
          <Gallery>
            {officeImages}
          </Gallery>
        </OfficeTour>
      </Container>
      {isSlideShowOpen ?
        <SlideShow 
          setIsSlideshowOpen={setIsSlideshowOpen}
          startingIndex={startingIndex}
        />
        : null}
    </Layout>
  )
}

export const query = graphql`
query {
  patientBack: file(relativePath: { eq: "patient-back.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  officeTour: allFile(filter: {relativeDirectory: {eq: "officeTour"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default Clinic

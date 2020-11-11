import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { GiCircleClaws } from 'react-icons/gi'

import Layout from "../components/layout/layout"
import BackgroundSection from "../components/background-section"
import InternalLink from '../components/shared/internal-link'

import SEO from "../components/seo"

import { breakpoints, colors } from '../utils/styles'


const Container = styled.div``

const Bullet = styled(GiCircleClaws)``

const StyledBG = styled(BackgroundSection)`
  max-width: 1500px;
  margin: 0 auto;
`

const WelcomeTextContainer = styled.div`
  color: white;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`
const Description = styled.div`
  background: ${colors.lightest};
  padding: 2rem 0;
  text-align: center;

  #container {
    width: 90%;
    max-width: 950px;
    margin: 0 auto;
  }

  p {
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 5rem 0;
  }
`
const ColorBackground = styled.div`
  background: ${colors.lightGrey};
`
const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 3rem 0;
  

  & > * {
    flex: 50%;
  }


  .text-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.lightest};

  }

  ul {
    list-style: none;
    padding: 0;
    span {
      color: ${colors.logoGreen};
      padding-right: 4px;
    }
  }

  #new-patient {
    font-size: 2rem;
  }

  #second-item {
    background: ${colors.lightGrey};
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    max-width: 950px;

    &.second {
      .gatsby-image-wrapper {
        order: 2;
      }
    }
  }
`

const IndexPage = ({data}) => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Container>
          <ColorBackground>
            <StyledBG
                fluid={data.main.childImageSharp.fluid}
                shade='.5'
              >
              <WelcomeTextContainer>
                  <h2>WELCOME TO</h2>
                  <h2>BUELTMANN</h2>
                  <h2>CHIROPRACTIC</h2>
              </WelcomeTextContainer>
            </StyledBG>
          </ColorBackground>
          <Description>
            <div id='container'>
              <p>
                As one of the St. Louis area’s most prominent resources for quality healthcare, 
                Bueltmann Chiropractic specializes in a wide range of chiropractic techniques to get patients feeling healthier than ever before. 
                And while we work hard to offer top-of-the-line treatments that help you feel better and get better,
                we also focus on preventative strategies to ensure you stay better for longer.
              </p>
              <p>
                Dr. Bueltmann is committed to addressing your unique needs with chiropractic solutions, 
                whether you are seeking pain relief or interested in wellness care. 
                Dr. Bueltmann is trained in a variety of techniques and has treated patients ranging from 2 weeks old to 98 years old. 
              </p>
              <p>
                If you have not been to a chiropractor before and want to find out more, 
                please email us or call (314) 346-6822 to receive the answers to your questions. 
                We also welcome referrals, so we invite you to share our chiropractic and wellness information with your friends and loved ones.
              </p>
            </div>
          </Description>
          <ColorBackground>
            <ImageAndTextContainer>
            <Img 
                fluid={data.patient.childImageSharp.fluid}
                alt='Patient with doctor'
              />
                <div className='text-container'>
                  <p>At Bueltmann Chiropractic, we treat many different conditions, most commonly:</p>
                  <ul>
                    <li><span><Bullet/></span>Headaches & Migraines</li>
                    <li><span><Bullet/></span>Neck Pain</li>
                    <li><span><Bullet/></span>Shoulder Pain</li>
                    <li><span><Bullet/></span>Back Pain</li>
                    <li><span><Bullet/></span>Sciatia</li>
                    <li><span><Bullet/></span>Extremity Problems</li>
                    <li><span><Bullet/></span>Athletic Injuries</li>
                    <li><span><Bullet/></span>Soft Tissue Injuries</li>
                    <li><span><Bullet/></span>Stress Related Conditions</li>
                  </ul>
                </div>
            </ImageAndTextContainer>
          </ColorBackground>
          <ImageAndTextContainer className='second'>
            <Img 
                fluid={data.clipboard.childImageSharp.fluid}
                alt='Patient with doctor'
              />
            <div className='text-container' id='second-item'>
              <p id='new-patient'>New Patient?</p>
              <InternalLink to='/new-patient'>
                Learn More
              </InternalLink>
            </div>
            </ImageAndTextContainer>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    main: file(relativePath: { eq: "main-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    patient: file(relativePath: { eq: "patient.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clipboard: file(relativePath: { eq: "clipboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

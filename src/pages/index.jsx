import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import BackgroundSection from "../components/background-section"

import SEO from "../components/seo"

import { breakpoints, colors } from '../utils/styles'


const Container = styled.div`
  // width: 100%;
  // max-width: 1400px;
  // margin: 0 auto;
`

const BGContainer = styled.div`
  background: ${colors.lightGrey};
`
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
const ConditionsContainer = styled.div`
  background: ${colors.lightGrey};
`
const ConditionsTreated = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 3rem 0;

  & > * {
    flex: 1;
  }

  #conditions-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.lightest};
  }

  #text-container {
    padding: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    max-width: 950px;
  }
`

const ContactLink = styled(Link)`
    border: 2px solid ${colors.darkGrey};
    padding: 10px;
    border-radius: 50px;
    margin-top: 20px;

    &:hover {
        background: ${colors.darkGrey};
        color: ${colors.lightest};
    }
`

const IndexPage = ({data}) => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Container>
          <BGContainer>
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
          </BGContainer>
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
          <ConditionsContainer>
            <ConditionsTreated>
            <Img 
                fluid={data.patient.childImageSharp.fluid}
                alt='Patient with doctor'
              />
              <div id='conditions-text'>
                <div id='text-container'>
                  <p>At Bueltmann Chiropractic, we treat many different conditions, most commonly:</p>
                  <ul>
                    <li>Headaches & Migraines</li>
                    <li>Neck Pain</li>
                    <li>Shoulder Pain</li>
                    <li>Back Pain</li>
                    <li>Sciatia</li>
                    <li>Extremity Problems</li>
                    <li>Athletic Injuries</li>
                    <li>Soft Tissue Injuries</li>
                    <li>Stress Related Conditions</li>
                  </ul>
                </div>
              </div>
            </ConditionsTreated>
          </ConditionsContainer>
          <ConditionsTreated>
            <Img 
                fluid={data.clipboard.childImageSharp.fluid}
                alt='Patient with doctor'
              />
              <div id='conditions-text'>
                <div id='text-container'>
                  <p>New Patient?</p>
                  <ContactLink to='/new-patient'>
                    Learn More
                  </ContactLink>
                </div>
              </div>
            </ConditionsTreated>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    main: file(relativePath: { eq: "main-image.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    patient: file(relativePath: { eq: "patient.webp" }) {
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

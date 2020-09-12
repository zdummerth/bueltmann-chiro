import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import BackgroundSection from "../components/background-section"

import SEO from "../components/seo"

const Description = styled.div`
  background: rgba(0,128,128,.2);
  padding: 5rem 0;

  #container {
    width: 90%;
    max-width: 950px;
    margin: 0 auto;
  }

  p {
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }
`
const ConditionsTreated = styled.div`
  display: flex;
  // height: 300px;
  width: 90%;
  max-width: 950px;
  margin: 0 auto;
  padding: 5rem 0;

  & > * {
    flex: 1;
  }

  #conditions-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    background: rgba(128,128,128,.2);
  }

  #text-container {
    width: 85%;
    margin: 0 auto;
  }
`

const OfficeHours = styled.div`
  background-color: white;
  padding: 3rem;
  text-align: center;

  p {
    margin: 0;
  }

  #first {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const IndexPage = ({data}) => {
  // console.log({data})
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        fluid={data.main.childImageSharp.fluid}
      >
        <div 
          style={{
            color: 'white',
          }}
        >
          <h2>WELCOME TO</h2>
          <h2>BUELTMANN</h2>
          <h2>CHIROPRACTIC</h2>
        </div>
      </BackgroundSection>
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
      <ConditionsTreated>
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
        <Img 
          fluid={data.patient.childImageSharp.fluid}
          alt='Patient with doctor'
          imgStyle={{
            objectFit: 'contain', 
          }}
        />
      </ConditionsTreated>
      <BackgroundSection
        fluid={data.desk.childImageSharp.fluid}
      >
        <OfficeHours>
          <p id='first'>Office Hours</p>
          <p>Hours by appointment only.</p>
          <p>Please call to schedule</p>
        </OfficeHours>
      </BackgroundSection>
    </Layout>
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
  desk: file(relativePath: { eq: "desk.webp" }) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage

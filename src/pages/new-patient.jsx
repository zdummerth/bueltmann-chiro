import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import InternalLink from '../components/shared/internal-link'

import { colors, breakpoints } from '../utils/styles'


const Container = styled.div`
  padding-bottom: 60px;
`


const IntroContainer = styled.div`
  background: ${colors.lightGrey};
  padding: 20px 10px;
`

const Intro = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
`
const CardContainer = styled.div`
  margin-top: 30px;
`
const Card = styled.div`
  padding: 2.5rem 0;
  background: ${colors.lightest};


  .gatsby-image-wrapper {
    width: 100%;
    max-width: 301px;
    margin: 0 auto;
  }

  .text-container {
    text-align: center;
    padding: 1rem;
  }

  h2 {
    margin-top: 0;
  }

  &.second-card {
    background: ${colors.lightGrey};
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;

    .gatsby-image-wrapper {
      flex-basis: 301px;
      margin: 0;
    }

    .text-container {
      text-align: center;
      padding: 1rem 3rem;
      flex: 1;
      max-width: 600px;
    }

    &.second-card {
      .gatsby-image-wrapper {
        order: 2;
      }
    }
  }

`


const OfficeForm = styled.div`
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
`



const NewPatientPage = ({data}) => {
  console.log({data})
    return (
        <Layout>
            <SEO title='New Patient' />
            <Container>
              <IntroContainer>
                <Intro>
                  <h1>New Patient Center</h1>
                  <p>
                    We understand that arriving at a chiropractic office for the first time can be nerve racking. 
                    If you've never experienced chiropractic care before, you may not know what to expect when you 
                    come to our office for the first time. Filling out paperwork, learning new faces, and getting 
                    to know your way around the office can be an overwhelming experience.
                  </p>
                  <p>
                    That's why at Bueltmann Chiropractic, our aim is to remove any unnecessary stress or tension 
                    and make you feel comfortable during your visit with Dr. Bueltmann.
                  </p>
                  <p>
                    In this area of the website, you will be able to take care of the items necessary for your 
                    chiropractic visit prior to arriving, in the comfort of your own home. If you have any questions 
                    at any time, please don't hesitate to contact us at 314-346-6822!
                  </p>
                  <InternalLink to='/contact'>Schedule an Appointment</InternalLink>
                </Intro>
              </IntroContainer>
              <CardContainer>
                <Card>
                  <Img
                    fluid={data.onemobile.childImageSharp.fluid}
                    style={{
                      maxWidth: '301px'
                    }}
                  />
                  <div className='text-container'>
                    <h2>What to Expect</h2>
                    <h3>Your First Visit</h3>
                    <p>
                      Upon visiting the office you will begin with a consultation with Dr. Bueltmann to discuss your 
                      health-related problems, concerns, and potential treatment options. This initial visit is designed 
                      for Dr. Bueltmann to learn more about you, your condition, and  expectations to determine 
                      how chiropractic care can meet your goals.
                    </p>
                    <p>
                      Next, Dr. Bueltmann will perform a complete chiropractic examination. This examination is 
                      based off what your health problems are and can include neurological, orthopedic, postural, 
                      reflex and physical tests. However, nothing will be done in our office without your consent.
                    </p>
                    <p>
                      After the exam, Dr. Bueltmann will report to you what she had found and answer any questions you may have. 
                      Based on your history, examination and your outcome goals, Dr. Bueltmann will recommend a treatment she 
                      thinks is most beneficial to you. If there are no contradictions to care on the date of the first visit, 
                      you can receive your first treatment at that time. 
                    </p>
                  </div>
                </Card>
                <Card className='second-card'>
                <Img
                      fluid={data.threedt.childImageSharp.fluid}
                  />
                  <div className='text-container'>
                    <h2>Payment Options</h2>
                    <h3>Making Healthcare Affordable</h3>
                    <p>
                      In order to keep down the cost of healthcare in our office, patients pay for services rendered 
                      at the time of their visit by cash or check. As a convenience, Visa and MasterCard are also accepted. 
                    </p>
                    <p>
                      Patients with health insurance will be provided with all the necessary 
                      information to be sent to the insurance company for reimbursement. 
                    </p>
                    <p>
                      Please call the office for fees.
                    </p>
                    <p>
                      At Bueltmann Chiropractic in Sunset Hills, we believe that prevention is the best cure, 
                      and regular chiropractic care will be far less time consuming and expensive than trying 
                      to recover from pain or an injury after it's happened. If you feel you do not have enough 
                      time or money to take care of yourself, please contact us at 314-346-6822--we can help!  
                      The last thing we want is for you to come to our chiropractic center in crisis. 
                      Flexible payment options can be arranged. 
                    </p>
                  </div>
                </Card>
              </CardContainer>
              <OfficeForm>
                <div className='text-container'>
                    <h2>Office Forms</h2>
                    <p>
                      Bueltmann Chiropractic offers our patient forms online so they can be completed in the convenience of your 
                      own home or office, before you even arrive to our chiropractic office.
                    </p>
                    <p>New Patient Form</p>
                    <p>
                      If you are unable to complete forms at home or before your visit, 
                      paperwork can be provided for you in the office at the time of your visit.
                    </p>
                  </div>
              </OfficeForm>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
  onemobile: file(relativePath: { eq: "newPatient/np-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 301) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  threedt: file(relativePath: { eq: "newPatient/np-3-dt.webp" }) {
    childImageSharp {
      fluid(maxWidth: 390) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default NewPatientPage

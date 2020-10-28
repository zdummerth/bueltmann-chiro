import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { GiCircleClaws } from 'react-icons/gi'


import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import InternalLink from '../components/shared/internal-link'

import { colors } from '../utils/styles'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.lightGrey};
    padding-bottom: 60px;

    h3 {
      margin-top: 0;
    }
`
const Title = styled.h1`
  margin-bottom: 0;
`

const ServiceCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1200px;
`

const ServiceCard = styled.div`
    width: 90%;
    max-width: 500px;
    margin: 15px 5px;
    background: ${colors.lightest};
    padding: 0 20px 10px;

    ul {
      list-style: none;
      span {
        color: ${colors.logoGreen};
        padding-right: 4px;
      }
    }
    
`

const CardTitle = styled.h2`
  text-align: center;
  padding: 0;
`

const AppointmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

const ServicesPage = ({ data }) => {
    return (
        <Layout>
            <SEO title='Services' />
            <Container>
                <Title>Services We Offer</Title>
                <h3>For Health and Wellness</h3>
                <ServiceCardContainer>
                    <ServiceCard>
                        <CardTitle>Chiropractic Care</CardTitle>
                        <Img 
                            fluid={data.chiro.childImageSharp.fluid}
                        />
                        <p>
                            Dr. Bueltmann is trained in a variety techniques including some of the newest techniques available. 
                            While chiropractors typically work with the spine, we are trained to deal with just about every
                            joint in the body. The spine is usually the main focus not only because of neck and back pain, 
                            but because it is vitally connected to the central nervous system – the system that regulates body function. 
                            Chiropractors balance the body structures through specific movements of the spine (called a chiropractic adjustment), 
                            releasing the natural healing power of the body.
                        </p>
                        <p>The chiropractic services we offer include:</p>
                        <ul>
                            <li><span><GiCircleClaws/></span>Diversified-Manual Treatment</li>
                            <li><span><GiCircleClaws/></span>Thompson Technique</li>
                            <li><span><GiCircleClaws/></span>Cox Flexion-Distraction</li>
                            <li><span><GiCircleClaws/></span>Logan Basic Technique</li>
                            <li><span><GiCircleClaws/></span>Activator Method</li>
                            <li><span><GiCircleClaws/></span>Webster Technique</li>
                            <li><span><GiCircleClaws/></span>Graston Technique</li>
                        </ul>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Pregnancy & Women's Health</CardTitle>
                        <Img 
                            fluid={data.pregnancy.childImageSharp.fluid}
                        />
                        <p>
                            Chiropractic is a valuable tool for a pregnant woman’s growing and 
                            changing body to help support it and to ease the pain that comes along 
                            with pregnancy. Most women report some degree of low back pain along 
                            with other symptoms accompanying their pregnancy. Dr. Bueltmann is 
                            certified in a specific technique for pregnant women known as Webster Technique. 
                            It is a specific pelvic adjustment to help balance pelvic muscles and ligaments 
                            and potentially improve birth outcome. The treatment involves analysis of the 
                            relationship of the bones of the pelvis, and correction of aberrant neuro-biomechanics 
                            through the use of a light force chiropractic adjustment of the sacrum (Step 1). 
                            It also involves analysis and light contact to a supporting pelvic ligament. (Step 2). 
                            Both steps are intended to restore neuro-biomechanical function in the pelvis. ive movements, 
                            surgeries, and anything else that may cause the body to compensate for an area of weakness. 
                            Specific exercises and stretches approved by your chiropractor will help achieve the goal of 
                            restoring normal muscle function, normal range of motion, and improving strength.
                        </p>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Trigger Point Therapy</CardTitle>
                        <Img 
                            fluid={data.triggerPoint.childImageSharp.fluid}
                        />
                        <p>
                            There is tissue (called fascia) that covers every structure in the body including organs, 
                            muscles, nerves and blood vessels. The fascia that covers your muscles is call myofascia. 
                            When the myofascia is stressed from overuse or trauma, it can tear and adhear together. 
                            These adhesions are called "trigger points" and can prevent the muscles from working well. 
                            Trigger points lead to an increase in muscle stiffness and tenderness and a decrease in range-of-motion. 
                            Also, the pain from trigger points can radiate from the adhesion. Dr. Bueltmann is trained in locating 
                            and treating trigger points both manually and tool-assisted.
                        </p>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Corrective Exercises</CardTitle>
                        <Img 
                            fluid={data.exercises.childImageSharp.fluid}
                        />
                        <p>
                            Dr. Bueltmann instructs patients on corrective exercises in order to help treat musculoskeletal 
                            imbalances within the human movement system. The body is connected all throughout and what many 
                            don’t realize is that the pain or discomfort you are having in a specific area is possibly being 
                            caused by an imbalance within the body at a completely different site. Imbalances in the body can 
                            arise from a previous injury, repetitive movements, surgeries, and anything else that may cause 
                            the body to compensate for an area of weakness. Specific exercises and stretches approved by your 
                            chiropractor will help achieve the goal of restoring normal muscle function, normal range of motion, 
                            and improving strength.
                        </p>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Lifestyle Recommendations</CardTitle>
                        <Img 
                            fluid={data.lifestyle.childImageSharp.fluid}
                        />
                        <p>
                            An important aspect to achieving overall health is taking initiative and continuing care at 
                            home and in your everyday life. At Bueltmann Chiropractic, we coach patients on nutrition, 
                            lifestyle changes, and things such as work ergonomics in order for the patient to achieve their optimal health. 
                            These changes supplement the chiropractic adjustment and help the patient to heal better and faster.
                        </p>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Physicals</CardTitle>
                        <Img 
                            fluid={data.physicals.childImageSharp.fluid}
                        />
                        <p>
                            At Bueltmann Chiropractic, we also perform school physicals, sports physicals and adult physicals.
                        </p>
                    </ServiceCard>
                </ServiceCardContainer>
                <AppointmentContainer>
                  <p>Make an appointment today, and see what makes our patient care one of the best in the nation.</p>
                  <InternalLink to='/contact'>Schedule an Appointment</InternalLink>
                </AppointmentContainer>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
  chiro: file(relativePath: { eq: "services/chiro-care.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  pregnancy: file(relativePath: { eq: "services/pregnancy.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  triggerPoint: file(relativePath: { eq: "services/trigger-point.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  exercises: file(relativePath: { eq: "services/exercises.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  lifestyle: file(relativePath: { eq: "services/lifestyle.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  physicals: file(relativePath: { eq: "services/physicals.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default ServicesPage

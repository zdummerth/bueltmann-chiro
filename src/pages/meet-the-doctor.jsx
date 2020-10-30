import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import InternalLink from '../components/shared/internal-link'


import { colors, breakpoints } from '../utils/styles'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    background-color: ${colors.lightGrey};
`
const TitleContainer = styled.div`
    width: 100%;
    text-align: center;
`
const Title = styled.h1``

const Subtitle = styled.h2``

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    // background: ${colors.lightest};
    padding-top: 20px;
    .gatsby-image-wrapper {
        width: 100%;
        max-width: 500px;
        // border-radius: 50%;
    }
`

const TextContainer = styled.div`
    // width: 90%;
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
    background: ${colors.lightest};
    padding: 20px;

    a {
        text-decoration: underline;
    }

    @media (min-width: 500px) {
        background: none;
    }
`



const MeetTheDoctorPage = ({data}) => {
    return (
        <Layout>
            <SEO title='Meet the Doctor' />
            <Container>
                <TitleContainer>
                    <Title>Meet the Doctor</Title>
                    <Subtitle>Dr. Katie Bueltmann D.C.</Subtitle>
                </TitleContainer>
                <div className="wrapper">
                    <ImgContainer>
                        <Img
                            fluid={data.file.childImageSharp.fluid}
                            imgStyle={{
                                // objectFit: 'contain'
                            }}
                        />
                    </ImgContainer>
                    <TextContainer>
                        <p>
                            Dr. Katie Bueltmann is a Chiropractic Physician who graduated from Logan University in St. Louis, Missouri. 
                            Dr. Bueltmann is also a native to St. Louis. She started school at Seven Holy Founders. From there, she 
                            went to Ursuline Academy for high school. Once she graduated in 2007, she attended University of Missouri-Columbia (Mizzou) 
                            where she received her Bachelors in Psychology. Afterwards, she received her Doctorate from Logan University as well as a 
                            Bachelors in Life Science. </p>
                        <p>
                            Dr. Bueltmann is trained in a variety of techniques and therapies that allow her to choose the right treatment for the 
                            patient in order to relieve pain and restore function to the body. Beyond treatments, Dr. Bueltmann educates patients 
                            on healthy lifestyle choices, proper exercise techniques and things such as workplace ergonomics in order live a proper 
                            life of health and function.
                        </p>
                        <p>
                            In Dr. Bueltmann's free time, she enjoys bass fishing, live music, and cheering for her favorite sports 
                            teams- St. Louis Cardinals, St. Louis Blues, and the Mizzou Tigers.
                        </p>
                        <p>
                            Dr. Bueltmann is a member of Missouri State Chiropractors Association and the 
                            <a href='https://icpa4kids.com/parent-portal/' target='_blank' rel="noreferrer"> International Chiropractic Pediatric Association.</a> 
                        </p>
                    </TextContainer>
                </div>
                <InternalLink to='/contact'>
                        Get In Touch
                </InternalLink>
            </Container>
            <div className="wrapper"></div>
        </Layout>
    )
}

export const query = graphql`
query {
  file(relativePath: { eq: "big-ol-bitch.webp" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default MeetTheDoctorPage

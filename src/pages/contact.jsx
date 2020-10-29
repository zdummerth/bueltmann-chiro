import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { FiPhone } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'



import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BasicForm from '../components/form'
import SocialLinks from '../components/shared/social-links'



import { breakpoints, colors } from '../utils/styles'


const Container = styled.div`
  h1 {
    margin-top: 0;
  }
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;

    & > * {
      flex: 1;
    }
  }
`
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
  }

  & > * {
    margin: 10px 0;
  }

  .contact-icon {
    color: ${colors.logoGreen};
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Address = styled.div``

const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
  background: ${colors.lightGrey};
  padding: 0 2rem;
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.lightest};

  .gatsby-image-wrapper {
    width: 100%;
  }
`

const StyledSocialLinks = styled(SocialLinks)`
  font-size: 1.75rem;
  color: ${colors.darkGrey};
  flex: 1;
`


const ContactPage = ({data}) => {
    return (
        <Layout>
            <SEO title='Contact' />
            <Container>
              <TextWrapper>
                <Img 
                  fluid={data.file.childImageSharp.fluid}
                  alt='A row of mailboxes'
                  />
                <h1>Contact Us</h1>
                <ContactInfo>
                  <StyledSocialLinks />
                  <AddressContainer>
                    <FaMapMarkerAlt className='contact-icon' />
                    <Address>
                      <p>4600 S. Lindbergh, Suite 2</p>
                      <p>St. Louis, MO 63127</p>
                    </Address>
                  </AddressContainer>
                  <PhoneNumber>
                    <FiPhone className='contact-icon' />
                    <p>(314) 346-6822</p>
                  </PhoneNumber>
                  {/* <StyledSocialLinks /> */}
                </ContactInfo>
              </TextWrapper>
              <FormContainer>
                <BasicForm />
              </FormContainer>
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

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { colors, breakpoints } from '../../utils/styles'

import SocialLinks from '../shared/social-links'
import Header from "./header"

import { dimensions } from '../../utils/styles';



import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
    color: ${colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.375;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`

const Motto = styled.div`
  text-align: center;
  padding: 0 .5rem;
  
  h4 {
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
    padding: 10px;
  }

  p {
    font-style: italic;
    margin: 0;
    padding-bottom: 10px;
  }
`

const ContentWrapper = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  
  & > * {
    flex: 1;
  }

  .full-width-bg {
    width: 100%;
    background: ${colors.lightGrey};
  }

  .center-text {
    text-align: center;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 30px;
  text-align: center;

  background-color: ${colors.darkGrey};
  color: ${colors.lightest};

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    p {
      margin-bottom: 0;
    }
  }
`
const StyledSocialLinks = styled(SocialLinks)`
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
`
const PhoneNumber = styled.div`
  text-align: center;
  p {
    margin-top: 0;
  }
`
const Address = styled.div`
  text-align: center;
  p {
    margin-top: 0;
  }
`
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  outline: 0;
  white-space: nowrap;
  position: relative;
  margin: 6px;
`

// When header is fixed, it's removed from doc flow
// This offsets that
const FixedNavbarMargin = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: ${dimensions.headerHeight};
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [navbarClosed, setNavbarClosed] = useState(true);


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header 
          siteTitle={data.site.siteMetadata.title} 
          navbarClosed={navbarClosed}
          setNavbarClosed={setNavbarClosed}/>
          <FixedNavbarMargin />
        <Motto>
          <h4>Bueltmann Chiropractic</h4>
          <p>Relieve Pain - Restore Function - Create Wellness</p>
        </Motto>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>
          <PhoneNumber>
            <p>Bueltmann Chiropractic</p>
            <p>(314) 346-6822</p>
            <StyledLink to='/contact'>Contact Us</StyledLink>
          </PhoneNumber>
          <StyledSocialLinks />
          <Address>
            <p>4600 S. Lindbergh, Suite 2</p>
            <p>St. Louis, MO 63127</p>
          </Address>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

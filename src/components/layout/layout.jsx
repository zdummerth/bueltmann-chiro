/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { colors } from '../../utils/styles'

import Header from "./header"


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
  padding: 30px 30px;
  background-color: ${colors.darkGrey};
  color: ${colors.lightest};

  @media (max-width: 900px) {
    flex-direction: column;
    p {
      margin-bottom: 0;
    }
  }
`
const IconWrapper = styled.div``

const FbIcon = styled(FaFacebookF)`
  font-size: 22px;
  @media (max-width: 900px) {
    font-size: 28px;
  }
`
const IgIcon = styled(FaInstagram)`
  font-size: 22px;
  @media (max-width: 900px) {
    font-size: 28px;
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

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Motto>
          <h4>Bueltmann Chiropractic</h4>
          <p>Relieve Pain - Restore Function - Create Wellness</p>
        </Motto>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>
          {/* <StyledLink as='a' href='mailto:bueltmannchiropractic@gmail.com'>bueltmannchiropractic@gmail.com</StyledLink> */}
          <StyledLink to='/contact'>Contact Us</StyledLink>
          <IconWrapper>
            <StyledLink as='a' href='https://www.facebook.com/BueltmannChiropractic/' target='_blank' rel="noopener"><FbIcon /></StyledLink>
            <StyledLink as='a' href='https://www.instagram.com/bueltmannchiropractic/' target='_blank' rel="noopener"><IgIcon /></StyledLink>
          </IconWrapper>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

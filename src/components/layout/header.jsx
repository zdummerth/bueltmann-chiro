import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { colors } from '../../utils/styles'


import Logo from "./logo"



const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: ${props => (props.closed ? "" : "hidden")};
    height: ${props => (props.closed ? "" : "100vh")};
  }
`

const HeaderWrapper = styled.header`
  padding: 0 1rem;
  @media (min-width: 900px) {
    font-size: .9rem;
  }
  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  z-index: 50;
  align-items: center;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    width: 100%;
    background-color: #020202;
    opacity: .95;
    // border-top: 1px solid ${colors.lightTeal};
    transition: all 0.3s ease-in;
    top: 70px;
    left: ${props => (props.closed ? "-100%" : "0")};
  }
  a[aria-current="page"] {
    border-bottom: 1px solid ${colors.lightTeal};
  }
`

const Hamburger = styled.div`
  background-color: #C00A0A;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.closed ? "inherit" : "rotate(-45deg)")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #C00A0A;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.closed ? "rotate(0deg)" : "rotate(-90deg) translate(-10px, 0px)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.closed ? "1" : "0")};
    transform: ${props => (props.closed ? "rotate(0deg) " : "rotate(90deg)")};
    top: 10px;
  }
`
const LogoLink = styled(Link)`
  margin-left: 5%;
  display: flex;
  align-items: center;

  p {
    padding-left: 10px;
  }
`
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  margin: 1rem;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: ${colors.lightTeal};
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: ${colors.lightTeal};
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


const Header = ({ siteTitle }) => {

  const MenuItems = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/contact",
      title: "Contact"
    },
    {
      path: "/the-clinic",
      title: "The Clinic"
    },
    {
      path: "/services",
      title: "Our Services"
    },
    {
      path: "/meet-the-doctor",
      title: "Meet The Doctor"
    },
    {
      path: "/new-patient",
      title: "New Patient Center"
    },
  ]

  const [navbarClosed, setNavbarClosed] = useState(true);
  
  const links = MenuItems.map((menuItem, index) => (
  <StyledLink key={index} to={menuItem.path}>{menuItem.title}</StyledLink>
  ))

  return (
    <HeaderWrapper>
      <Nav>
        <Toggle
            navbarClosed={navbarClosed}
            onClick={() => setNavbarClosed(!navbarClosed)}
          >
          <Hamburger closed={navbarClosed} />
        </Toggle>
        <LogoLink to='/'>
            <Logo />
        </LogoLink>
        <Navbox closed={navbarClosed}>
          <GlobalStyle closed={navbarClosed}/>
          {links}
        </Navbox>
      </Nav>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

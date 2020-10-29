import React from "react"
import { Link } from "gatsby"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import styled from 'styled-components'

const SocialLinksContainer = styled.div`
  #last {
    margin-right: 0;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  outline: 0;
  white-space: nowrap;
  position: relative;
  margin-right: 12px;
`


const SocialLinks = ({ className }) => {

  return (
    <SocialLinksContainer className={className}>
      <StyledLink as='a' href='https://www.facebook.com/BueltmannChiropractic/' target='_blank' rel="noopener"><FaFacebookF /></StyledLink>
      <StyledLink as='a' href='https://www.instagram.com/bueltmannchiropractic/' target='_blank' rel="noopener"><FaInstagram /></StyledLink>
      <StyledLink 
        as='a' 
        href='https://www.google.com/maps/place/Bueltmann+Chiropractic/@38.5310392,-90.3840667,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8ceda157f1d2f:0xc40f085c34267773!8m2!3d38.531035!4d-90.381878' 
        target='_blank' 
        rel="noopener"
        >
          <FaMapMarkerAlt />
      </StyledLink>
      <StyledLink as='a' href='https://twitter.com/bueltmann_chiro' target='_blank' rel="noopener" id='last'><FaTwitter /></StyledLink>
    </SocialLinksContainer>
  )
}

export default SocialLinks


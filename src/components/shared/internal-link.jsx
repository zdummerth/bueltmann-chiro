import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import { colors } from '../../utils/styles'

const StyledLink = styled(Link)`
  border: 2px solid ${colors.logoGreen};
  background: ${colors.logoGreen};
  padding: 10px 30px;
  border-radius: 50px;
  margin-top: 20px;
  color: ${colors.lightest};

  &:hover {
      background: ${colors.lightest};
      color: ${colors.darkest};
  }
`


const InternalLink = ({ to , as, className, children }) => {

  return (
    <StyledLink to={to} as={as} className={className}>{children}</StyledLink>
  )
}

export default InternalLink


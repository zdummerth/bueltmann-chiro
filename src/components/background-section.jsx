import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'


const BgWrapper = styled.div`
    position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => `rgba(0,0,0,${props.shade})`};
  display: flex;
  align-items: center;
  justify-content: center;
`

const BackgroundSection = ({fluid, children, className, shade}) => {
    return (
        <BgWrapper
            className={className}
        >
            <Img 
                fluid={fluid} 
                alt={'background image of doctor with patient'}
            />
            <Overlay 
                shade={shade ? shade : '0'}
            >
                {children}
            </Overlay>
        </BgWrapper>
    )
}


export default BackgroundSection

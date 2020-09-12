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
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextWrapper = styled.div`
    // font-size: 2rem;
`

const BackgroundSection = ({fluid, children}) => {
    return (
        <BgWrapper>
            <Img 
                fluid={fluid} 
                alt={'background image of doctor with patient'}
                style={{
                    height: '80vh'
                }}
                imgStyle={{ 
                    // objectFit: 'fill', 
                    // objectPosition: "50% 50%",
                }}
            />
            <Overlay>
                <TextWrapper>
                    {children}
                </TextWrapper>
            </Overlay>
        </BgWrapper>
    )
}


export default BackgroundSection

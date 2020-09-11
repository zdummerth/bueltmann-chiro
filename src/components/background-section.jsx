import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'


const BgWrapper = styled.div`
    position: relative;
    color: white;
    height: 90vh;
    overflow: hidden;
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
    font-size: 2.2rem;
`

const BackgroundSection = ({fluid}) => {
    return (
        <BgWrapper>
            <Img 
                fluid={fluid} 
                alt={'background image of doctor with patient'}
                imgStyle={{ 
                    objectFit: 'contain', 
                }}
            />
            <Overlay>
                <TextWrapper>
                    <h2>WELCOME TO</h2>
                    <h2>BUELTMANN</h2>
                    <h2>CHIROPRACTIC</h2>
                </TextWrapper>
            </Overlay>
        </BgWrapper>
    )
}


export default BackgroundSection

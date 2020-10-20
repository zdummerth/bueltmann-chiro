import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri'
import { colors } from '../utils/styles'


const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: rgba(0,0,0,.95);
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
`
const ImagesContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 80%;
  width: 100%;
//   border: 2px solid red;
`

const SlideshowControls = styled.div`
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: center;
  margin: 1px auto;
  max-width: 60%;
`
const SlideshowButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  font-size: 40px;
  color: ${colors.lightest};
  :hover {
      cursor: pointer;
  }
`

const DotContainer = styled.div`
  display: flex;
`
const Dot = styled.div`
  border: 2px solid ${colors.lightest};
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background: ${props => (props.active ? colors.lightest : '')};
  :hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    height: 10px;
    width: 10px;
  }
  `

  const Slide = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: ${props => props.active ? '1': '0'};
    transition: opacity .5s ease-in;

    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
        max-width: 800px;
        margin: 10px auto;
    }
  `
const CloseButton = styled.button`
    background: none;
    border: none;
    outline: none;
    font-size: 1.5rem;
    color: ${colors.lightest};
`

const SlideShow = ({setIsSlideshowOpen, startingIndex}) => {

const data = useStaticQuery(graphql`
  query {
    officeTour: allFile(filter: {relativeDirectory: {eq: "officeTour"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }
  `)

  const [index, setIndex] = useState(startingIndex);

  const officeImages = data.officeTour.edges.map(({ node }, ind) => {
    return (
      <Slide active={ind === index}>
        <Img 
            fluid={node.childImageSharp.fluid}
            className='slide-img'
            imgStyle={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
            }}
            />
      </Slide>
    )
  })

  const dots = officeImages.map((el, ind) => <Dot active={index === ind} onClick={() => setIndex(ind)} />)

  const handleNext = () =>
    index === officeImages.length - 1 ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(officeImages.length - 1) : setIndex(index - 1)

  return(
        <SlideshowContainer >
            <ImagesContainer>
                {officeImages}
            </ImagesContainer>
            <CloseButton onClick={() => setIsSlideshowOpen(false)}>Close X</CloseButton>
            <SlideshowControls>
                <SlideshowButton onClick={handlePrevious}><RiArrowLeftLine/></SlideshowButton>
                <DotContainer>
                    {dots}  
                </DotContainer>
                <SlideshowButton onClick={handleNext}><RiArrowRightLine/></SlideshowButton>
            </SlideshowControls>
        </SlideshowContainer>
  )
}

export default SlideShow
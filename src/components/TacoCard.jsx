import { Button } from 'lib/Button'
import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { TacoRecipe } from './TacoRecipe';

const CardOuter = styled.article`
  max-width: 1184px;
`
const CardInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "image" "info" "buttons";
  box-sizing: border-box;
  overflow: hidden;
  
  @media(min-width: 577px) {
    grid-template-columns: 280px 1fr;
    grid-template-areas: "image info" "image buttons";
    border-bottom: 1px solid #000;
    height: 280px;
    box-sizing: border-box;
  }
`
const CardImg = styled.div`
  grid-area: image;
  background-image: ${(props) => `url("https://source.unsplash.com/280x280/?${props.imgSlug}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vw;
  box-sizing: border-box;

  @media(min-width: 577px) {
    width: 280px;
    height: 280px;
    border-right: 1px solid #000;
    box-sizing: border-box;
  }
`
const CardInfo = styled.div`
  grid-area: info;
  padding: 40px;
  padding-bottom: 0;
  overflow: hidden;
`
const InfoTitle = styled.h2`
  height: 38px;
  margin: 0;
  margin-bottom: 8px;
  padding-right: 10px;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const TitleLink = styled.a`
  &:hover {
    border-bottom: 2px solid #000;
    cursor: pointer;
  }
`
const Info = styled.div`
  display: -webkit-box;
  max-width: 560px;
  margin: 0;
  margin-bottom: 20px;
  font-family: 'Playfair Display', Times, serif;
  font-size: 20px;
  line-height: 28px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  grid-area: buttons;
  padding: 40px;
  padding-top: 0;
`
const ReadMoreLink = styled.a`
  margin-left: 12px;
`

export const TacoCard = ({ recipe, imgSlug, recipeName, mainRecipe, info }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0',
      transform: 'translate(-50%, -50%)',
      maxHeight: '80vh',
      width: '80vw',
      maxWidth: '800px',
      border: '1px solid ',
      borderRadius: 'none'
    }
  }

  return (
    <CardOuter>
      <CardInner>
        <CardImg imgSlug={imgSlug} />
        <CardInfo>
          <InfoTitle>
            <TitleLink onClick={() => setModalIsOpen(!modalIsOpen)}>
              {recipeName || recipe.name}
            </TitleLink>
          </InfoTitle>
          <Info>{info}</Info>
        </CardInfo>
        <ButtonContainer>
          <Button text="Like" />
          <ReadMoreLink>
            <Button text="Read more" onClick={() => setModalIsOpen(!modalIsOpen)} />
          </ReadMoreLink>
        </ButtonContainer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(!modalIsOpen)}
          contentLabel="Example Modal"
          style={customModalStyles}>
          <TacoRecipe
            recipe={mainRecipe ? recipe : recipe.recipe}
            recipeName={recipeName || recipe.name}
            setModalIsOpen={setModalIsOpen} />
        </Modal>
      </CardInner>
    </CardOuter>
  )
};

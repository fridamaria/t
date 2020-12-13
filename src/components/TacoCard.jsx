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
`
const InfoTitle = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
`
const TitleLink = styled.a`
  &:hover {
    border-bottom: 2px solid #000;
    cursor: pointer;
  }
`
const Info = styled.div`
  margin: 0;
  margin-right: 236px;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 28px;
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

export const TacoCard = ({ recipe, imgSlug, recipeName, mainRecipe }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
          <Info />
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
          contentLabel="Example Modal">
          <TacoRecipe
            recipe={mainRecipe ? recipe : recipe.recipe}
            recipeName={recipeName || recipe.name} />
        </Modal>
      </CardInner>
    </CardOuter>
  )
};

import { Button } from 'lib/Button'
import React from 'react'
import styled from 'styled-components'

const CardOuter = styled.article`
  max-width: 1184px;

  @media(min-width: 577px) {
    height: 280px;
  }
`
const CardInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "image" "info" "buttons";
  height: 100%;
  
  @media(min-width: 577px) {
    grid-template-columns: 280px 1fr;
    grid-template-areas: "image info" "image buttons";
    border: 1px solid #000;
  }
`
const CardImg = styled.div`
  grid-area: image;
  background-image: url("https://source.unsplash.com/300x300/?burrito");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vw;

  @media(min-width: 577px) {
    width: 280px;
    height: 280px;
    border-right: 1px solid #000;
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

export const TacoCard = ({ fullTaco }) => {
  return (
    <CardOuter>
      <CardInner>
        <CardImg />
        <CardInfo>
          <InfoTitle>
            <TitleLink>{fullTaco.name}</TitleLink>
          </InfoTitle>
          <Info>
            <p>
              {fullTaco.base_layer && <span>{fullTaco.base_layer.name}</span>}
              {fullTaco.mixin && <span> with {fullTaco.mixin.name}</span>}
              {fullTaco.condiment && <span>, garnished with {fullTaco.condiment.name}</span>}
              {fullTaco.seasoning && <span> topped off with {fullTaco.seasoning.name}</span>}
              {fullTaco.shell && <span> and wrapped in {fullTaco.shell.name}</span>}
            </p>
          </Info>
        </CardInfo>
        <ButtonContainer>
          <Button title="Like" />
          <ReadMoreLink>
            <Button title="Read more" />
          </ReadMoreLink>
        </ButtonContainer>
      </CardInner>
    </CardOuter>
  )
};

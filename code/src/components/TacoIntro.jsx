import { Button } from 'lib/Button'
import React from 'react'
import styled from 'styled-components'
import { faHeart, faBookmark, faAlignJustify, faPlus } from '@fortawesome/free-solid-svg-icons'

const IntroOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin: 0px 16px;
  padding: 60px 0px;

  @media(max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-areas: "photo" "info";
    grid-gap: 20px;
    margin: 0;
    padding: 0 0 32px;
  }
`
const IntroContainer = styled.div`
  @media(max-width: 770px) {
    padding: 16px;
  }
`
const IntroTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 58px;
  margin: 0;
  margin-bottom: 13px;
  text-transform: uppercase;
`
const Intro = styled.p`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  margin: 0;
  margin-bottom: 16px;
`
const Link = styled.a`
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #000;
  margin-bottom: 16px;
`
const ImgContainer = styled.div`
  padding-bottom: 100%;
  background-image: url("https://source.unsplash.com/900x900/?burrito");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media(max-width: 770px) {
    grid-area: photo;
  }
`
const CategoryContainer = styled.section`
  margin-top: 24px;
`
const CategoryType = styled.h4`
  margin: 0;
  color: #939393;
  font-size: 14px;
  line-height: 17px;
`
const Category = styled.h3`
  margin-top: 12px;
  margin-bottom: 24px;
`
const ButtonContainer = styled.section`
  display: flex;
  height: 56px;
  margin-left: -16px;
`
const LikeWrapper = styled.div`
  padding: 8px;
  border-right: 1px solid #E7E7E9;
`
const ActionsWrapper = styled.div`
  margin: 8px;
`
const SecondaryText = styled.span`
  margin-left: 12px;
  color: #E7E7E9;
`

export const TacoIntro = ({ fullTaco }) => {
  const fullTacoArray = [
    'Main',
    fullTaco.base_layer ? fullTaco.base_layer.name : null,
    fullTaco.mixin ? fullTaco.mixin.name : null,
    fullTaco.condiment ? fullTaco.condiment.name : null,
    fullTaco.seasoning ? fullTaco.seasoning.name : null,
    fullTaco.shell ? fullTaco.shell.name : null
  ]

  const noOfTacoParts = fullTacoArray.filter((taco) => taco !== null).length

  return (
    <IntroOuter>
      <IntroContainer>
        <IntroTitle>{fullTaco.name}</IntroTitle>
        <Intro>
          {fullTaco.base_layer && <span>{fullTaco.base_layer.name}</span>}
          {fullTaco.mixin && <span> with {fullTaco.mixin.name}</span>}
          {fullTaco.condiment && <span>, garnished with {fullTaco.condiment.name}</span>}
          {fullTaco.seasoning && <span> topped off with {fullTaco.seasoning.name}</span>}
          {fullTaco.shell && <span> and wrapped in {fullTaco.shell.name}</span>}.
          Grab your Cholula and have a look at the recipes below.
        </Intro>
        <div>
          &#8594; <Link href="https://taco-randomizer.herokuapp.com/">taco-randomizer.herokuapp.com</Link>
        </div>

        {fullTaco && (
          <>
            <CategoryContainer>
              <CategoryType>Type</CategoryType>
              <Category>{noOfTacoParts > 2 ? 'Dinner' : 'Lunch'}</Category>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryType>Suitable for</CategoryType>
              <Category>{noOfTacoParts > 3 ? 'Weekend' : 'Weekday'}</Category>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryType>Details</CategoryType>
              <Category>
                Main, Base
                {fullTaco.mixin && ', Mixin'}
                {fullTaco.condiment && ', Condiment'}
                {fullTaco.seasoning && ', Sesoning'}
                {fullTaco.shell && ', Shell'}
              </Category>
            </CategoryContainer>
          </>
        )}

        <ButtonContainer>
          <LikeWrapper>
            <Button buttonIcon={faHeart} margin="12px" disabled>
              Like
              <SecondaryText>130</SecondaryText>
            </Button>
          </LikeWrapper>
          <ActionsWrapper>
            <Button buttonIcon={faBookmark} disabled />
            <Button buttonIcon={faAlignJustify} disabled />
            <Button buttonIcon={faPlus} disabled />
          </ActionsWrapper>
        </ButtonContainer>
      </IntroContainer>
      <ImgContainer />
    </IntroOuter>
  )
}
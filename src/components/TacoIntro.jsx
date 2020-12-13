import { Button } from 'lib/Button'
import React from 'react'
import styled from 'styled-components'

const IntroOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  padding: 60px 0px;
  margin: 0px 16px;
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
`
const LikeWrapper = styled.div`
  padding: 8px;
  border-right: 1px solid #e7e7e9;
`
const ActionsWrapper = styled.div`
  margin: 8px;
`

export const TacoIntro = ({ fullTaco }) => {
  return (
    <IntroOuter>
      <div>
        <IntroTitle>{fullTaco.name}</IntroTitle>
        <Intro>
          {fullTaco.base_layer && <span>{fullTaco.base_layer.name}</span>}
          {fullTaco.mixin && <span> with {fullTaco.mixin.name}</span>}
          {fullTaco.condiment && <span>, garnished with {fullTaco.condiment.name}</span>}
          {fullTaco.seasoning && <span> topped off with {fullTaco.seasoning.name}</span>}
          {fullTaco.shell && <span> and wrapped in {fullTaco.shell.name}</span>}.
          Grab your Cholula and have a look at the recipe below.
        </Intro>
        <div>
          &#8594; <Link href="https://taco-randomizer.herokuapp.com/">taco-randomizer.herokuapp.com</Link>
        </div>
        <CategoryContainer>
          <CategoryType>Type</CategoryType>
          <Category>Dinner</Category>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryType>Suitable for</CategoryType>
          <Category>Weekend</Category>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryType>Details</CategoryType>
          <Category>Vegan</Category>
        </CategoryContainer>
        <ButtonContainer>
          <LikeWrapper>
            <Button text="Like" />
          </LikeWrapper>
          <ActionsWrapper>
            <Button text="O" />
            <Button text="O" />
            <Button text="O" />
          </ActionsWrapper>
        </ButtonContainer>
      </div>
      <div>
        <ImgContainer />
      </div>
    </IntroOuter>
  )
}
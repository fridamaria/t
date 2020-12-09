import { Button } from 'lib/Button'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Octokit } from '@octokit/core'
import parse from 'html-react-parser'

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

  h1, h2, h4, hr, ul, ol, img {
    display: none
  }

  > :not(:nth-child(2)) {
    display: none;
  }
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

export const TacoCard = () => {
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
  const octokit = new Octokit({ auth: '9166f7e6c248ce416306d25ffe106b48950390dd' })

  const [recipe, setRecipe] = useState('')
  const [recipeName, setRecipeName] = useState('')
  const [recipeMDToHTML, setRecipeMDToHTML] = useState('')

  const MDToHTML = async () => {
    const response = await octokit.request('POST /markdown', {
      text: recipe
    })
    setRecipeMDToHTML(response.data)
  }

  MDToHTML()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setRecipeName(json.name)
        setRecipe(json.recipe)
      })
  }, [])

  return (
    <CardOuter>
      <CardInner>
        <CardImg />
        <CardInfo>
          <InfoTitle>
            <TitleLink>{recipeName}</TitleLink>
          </InfoTitle>
          <Info>{parse(recipeMDToHTML)}</Info>
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

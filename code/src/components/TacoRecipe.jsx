import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { MDToHTML } from 'utils/Utils'
import { Button } from 'lib/Button'

const RecipeOuter = styled.div`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;

  h2 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
  }

  h4, p {
    font-size: 16px;
    line-height: 20px;
  }

  p {
    margin-bottom: 0;
  }

  ul, ol {
    list-style-type: square;
    padding: 40px 0 40px 200px;
    border-bottom: 1px solid #e5e5e5;
    margin: 0;

    @media(max-width: 770px) {
      padding: 40px 20px;
    }
  }
`
const RecipeTitle = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  padding: 10px 40px;
  border-bottom: 1px solid #000;
  font-weight: 500;
  text-transform: uppercase;
`
const Recipe = styled.div`
  margin: 0 40px 40px;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
`

export const TacoRecipe = ({ recipe, recipeName, setModalIsOpen }) => {
  const [recipeHTML, setRecipeHTML] = useState('')
  const recipeStripped = recipeHTML
    .replace(/<h1[^>]*>/, '') // remove opeing h1-tags
    .replace(/<span[^<]*><\/?span>(.*?)<\/h1>/, '')
    .replace(/<a[^>]*>|<\/a>/g, '') // removes unwanted a-tags
    .replace(/<p><img[^>]*><\/p>/g, '') // removes unwanted imgs
    .replace(/<hr>/g, '') // removes unwanted hr-tags

  useEffect(() => {
    MDToHTML(recipe)
      .then((value) => {
        setRecipeHTML(value)
      })
  }, [recipe])

  return (
    <RecipeOuter>
      <RecipeTitle>{recipeName}</RecipeTitle>
      <Recipe>
        {parse(recipeStripped)}
        <ButtonContainer>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </ButtonContainer>
      </Recipe>
    </RecipeOuter>
  )
}
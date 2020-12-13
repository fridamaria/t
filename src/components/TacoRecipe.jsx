import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { MDToHTML } from 'utils/Utils'

const RecipeOuter = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 60px 0px;
  margin: 0px 16px;

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
  }
`
const Bold = styled.span`
  margin-top: 8px;
  font-weight: 500;
`

export const TacoRecipe = ({ recipe }) => {
  const [recipeHTML, setRecipeHTML] = useState('')
  const recipeStripped = recipeHTML
    .replace(/<h1[^>]*>/, '') // remove opeing h1-tags
    .replace(/<span[^<]*><\/?span>(.*?)<\/h1>/, '')
    .replace(/<a[^>]*>|<\/a>/g, '') // removes unwanted a-tags
    .replace(/<p><img[^>]*><\/p>/g, '') // removes unwanted imgs
    .replace(/<hr>/g, '') // removes unwanted hr-tags

  console.log(recipeStripped)

  useEffect(() => {
    MDToHTML(recipe)
      .then((value) => {
        setRecipeHTML(value)
      })
  }, [recipe])

  return (
    <RecipeOuter>
      <h2>Recipe</h2>
      {parse(recipeStripped)}
      <p>Have a look at the complementary recepies below to complete your taco.</p>
      <p>
        <Bold>Does this taco not tickle your fancy? </Bold>
        Do the taco shuffle!
        Load a new random recipe by clicking the button in the upper right corner.
      </p>
    </RecipeOuter>
  )
}
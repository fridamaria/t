import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { MDToHTML } from 'utils/Utils'

const RecipeOuter = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 60px 0px;
  margin: 0px 16px;
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
    </RecipeOuter>
  )
}
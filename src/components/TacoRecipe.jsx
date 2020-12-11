import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { MDToHTML } from 'utils/Utils'

const RecipeOuter = styled.div``

export const TacoRecipe = ({ recipe }) => {
  const [recipeHTML, setRecipeHTML] = useState('')

  useEffect(() => {
    MDToHTML(recipe)
      .then((value) => {
        setRecipeHTML(value)
      })
  }, [recipe])

  return (
    <RecipeOuter>
      {parse(recipeHTML)}
    </RecipeOuter>
  )
}
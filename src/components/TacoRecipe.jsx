import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

const RecipeOuter = styled.div``

export const TacoRecipe = ({ recipeMDToHTML }) => {
  return (
    <RecipeOuter>
      {parse(recipeMDToHTML)}
    </RecipeOuter>
  )
}
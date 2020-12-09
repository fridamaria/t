import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Octokit } from '@octokit/core'
import parse from 'html-react-parser'

const RecipeOuter = styled.div``

export const TacoRecipe = () => {
  const accessToken = process.env.MD_KEY
  const octokit = new Octokit({ auth: accessToken })
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'

  const [recipe, setRecipe] = useState('')
  const [recipeMarkdownSorted, setRecipeMarkdownSorted] = useState('')

  const markdownToHTML = async () => {
    const response = await octokit.request('POST /markdown', {
      text: recipe
    })
    setRecipeMarkdownSorted(response.data)
  }

  markdownToHTML()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setRecipe(json.recipe)
      })
  }, [])

  return (
    <RecipeOuter>
      {parse(recipeMarkdownSorted)}
    </RecipeOuter>
  )
}
import React, { useState, useEffect } from 'react'
import { Octokit } from '@octokit/core'
import { TacoCard } from './TacoCard'

export const TacoWrapper = () => {
  const accessToken = process.env.MD_KEY
  const octokit = new Octokit({ auth: accessToken })
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'

  const [fullTaco, setFullTaco] = useState('')
  const [recipe, setRecipe] = useState('')
  const [recipeMDToHTML, setRecipeMDToHTML] = useState('')

  const MDToHTML = async () => {
    const response = await octokit.request('POST /markdown', {
      text: recipe
    })
    setRecipeMDToHTML(response.data)
  }

  MDToHTML()
  console.log(recipeMDToHTML) // Remove

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFullTaco(json)
        setRecipe(json.recipe)
      })
  }, [])

  return (
    <TacoCard fullTaco={fullTaco} />
  )
};

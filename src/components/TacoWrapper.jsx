import React, { useState, useEffect } from 'react'
import { Octokit } from '@octokit/core'
import { TacoCard } from './TacoCard'

export const TacoWrapper = () => {
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
  const octokit = new Octokit({ auth: '9166f7e6c248ce416306d25ffe106b48950390dd' })

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

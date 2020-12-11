import React, { useState, useEffect } from 'react'
import { TacoCard } from './TacoCard'
import { TacoRecipe } from './TacoRecipe';

export const TacoWrapper = () => {
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'

  const [fullTaco, setFullTaco] = useState('')
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFullTaco(json)
        setRecipe(json.recipe)
      })
  }, [])

  return (
    <>
      <TacoCard fullTaco={fullTaco} />
      <TacoRecipe recipe={recipe} />
    </>
  )
};

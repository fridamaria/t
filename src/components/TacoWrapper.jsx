import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TacoIntro } from './TacoIntro'
import { TacoRecipe } from './TacoRecipe'
import { Header } from './Header'
import { SubRecipeGrid } from './SubRecipeGrid'

const Body = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0px auto;
`

export const TacoWrapper = () => {
  const url = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
  const [tacoCount, setTacoCount] = useState(1)
  const [fullTaco, setFullTaco] = useState('')
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFullTaco(json)
        setRecipe(json.recipe)
      })
  }, [tacoCount])

  return (
    <>
      <Header tacoCount={tacoCount} setTacoCount={setTacoCount} />
      <Body>
        <TacoIntro fullTaco={fullTaco} />
        <TacoRecipe recipe={recipe} />
        <SubRecipeGrid fullTaco={fullTaco} />
      </Body>
    </>
  )
};

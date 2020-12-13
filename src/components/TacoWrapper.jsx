import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TacoIntro } from './TacoIntro'
import { Header } from './Header'
import { RecipeGrid } from './RecipeGrid'

const Wrapper = styled.div`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const Body = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0px auto;
`
const Footer = styled.footer`
  height: 268px;
  padding: 40px;
  background: #000;
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
    <Wrapper>
      <Header tacoCount={tacoCount} setTacoCount={setTacoCount} />
      <Body>
        <TacoIntro fullTaco={fullTaco} />
        <RecipeGrid fullTaco={fullTaco} recipe={recipe} />
      </Body>
      <Footer />
    </Wrapper>
  )
};

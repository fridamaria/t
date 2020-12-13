import React from 'react'
import styled from 'styled-components'
import { TacoCard } from './TacoCard'

const GridOuter = styled.div`
  padding: 60px 0px;
  margin: 0px 16px;
  border-top: 1px solid #e5e5e5;
`
const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid #000;
  border-bottom: none;
`
const SubRecipeHeader = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  padding: 10px 40px;
  border-bottom: 1px solid #000;
  font-weight: 500;
  text-transform: uppercase;
`

export const SubRecipeGrid = ({ fullTaco }) => {
  return (
    <GridOuter>
      <Grid>
        <SubRecipeHeader>Complementary recipes</SubRecipeHeader>
        {fullTaco.base_layer && <TacoCard subRecipe={fullTaco.base_layer} imgSlug="burrito" />}
        {fullTaco.mixin && <TacoCard subRecipe={fullTaco.mixin} imgSlug="mexican-food" />}
        {fullTaco.condiment && <TacoCard subRecipe={fullTaco.condiment} imgSlug="guacamole" />}
        {fullTaco.seasoning && <TacoCard subRecipe={fullTaco.seasoning} imgSlug="jalapeno" />}
        {fullTaco.shell && <TacoCard subRecipe={fullTaco.shell} imgSlug="corn-tortilla" />}
      </Grid>
    </GridOuter>
  )
};

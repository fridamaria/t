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
  border-bottom: 1px solid #000;
`

export const SubRecipeGrid = ({ fullTaco }) => {
  return (
    <GridOuter>
      <Grid>
        <SubRecipeHeader>
          Sub recipe placeholder title
        </SubRecipeHeader>
        {fullTaco.base_layer && <TacoCard subRecipe={fullTaco.base_layer} />}
        {fullTaco.mixin && <TacoCard subRecipe={fullTaco.mixin} />}
        {fullTaco.condiment && <TacoCard subRecipe={fullTaco.condiment} />}
        {fullTaco.seasoning && <TacoCard subRecipe={fullTaco.seasoning} />}
        {fullTaco.shell && <TacoCard subRecipe={fullTaco.shell} />}
      </Grid>
    </GridOuter>
  )
};

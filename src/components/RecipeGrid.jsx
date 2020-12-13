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

export const RecipeGrid = ({ fullTaco, recipe }) => {
  const recipeInfo = {
    main: 'Main recipe, complete with additional recipies below. Does it not tickle your fancy? Do the taco shuffle by clicking the 👀-button in the upper right corner.',
    base: 'The base layer, your bae if you wish, is here to ensure the foundation of the taco is solid',
    mixin: 'You may want to bring some mixins into the mix, have a look at this complementary recipe.',
    condiment: 'Some proper condiments to go with your taco? You can always add some Cholula to bring the 🔥',
    seasoning: 'Sprinkle, sprinkle! Add some seasoning to enhance the flavor of your taco',
    shell: 'Finish your taco off with this complementary shell, you are now good to go!'
  }

  console.log(recipeInfo.mixin)

  return (
    <GridOuter>
      <Grid>
        <SubRecipeHeader>Taco recipes</SubRecipeHeader>
        {fullTaco && (
          <TacoCard
            recipe={recipe}
            imgSlug="tacos"
            recipeName={fullTaco.name}
            mainRecipe
            info={recipeInfo.main} />
        )}
        {fullTaco.base_layer && (
          <TacoCard recipe={fullTaco.base_layer} imgSlug="burrito" info={recipeInfo.base} />
        )}
        {fullTaco.mixin && (
          <TacoCard recipe={fullTaco.mixin} imgSlug="mexican-food" info={recipeInfo.mixin} />
        )}
        {fullTaco.condiment && (
          <TacoCard recipe={fullTaco.condiment} imgSlug="guacamole" info={recipeInfo.condiment} />
        )}
        {fullTaco.seasoning && (
          <TacoCard recipe={fullTaco.seasoning} imgSlug="jalapeno" info={recipeInfo.section} />
        )}
        {fullTaco.shell && (
          <TacoCard recipe={fullTaco.shell} imgSlug="corn-tortilla" info={recipeInfo.shell} />
        )}
      </Grid>
    </GridOuter>
  )
};

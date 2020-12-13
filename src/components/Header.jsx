import React from 'react'
import styled from 'styled-components'
import { Button } from '../lib/Button'

const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 71px;
  border-bottom: 1px solid #000;
`
const TacoHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`
const Title = styled.h2`
  font-size: 15px;
  font-weight: 400;
`
const ButtonWrapper = styled.div`
  margin-right: 8px;
`

export const Header = ({ tacoCount, setTacoCount }) => {
  return (
    <HeaderWrapper>
      <TacoHeader>
        <TitleWrapper>
          <Title>&#8226; T A C O T E S T I N G</Title>
        </TitleWrapper>
        <ButtonWrapper>
          <Button
            text={<span role="img" aria-label="eyes">👀</span>}
            onClick={() => setTacoCount(tacoCount + 1)}
            hover="#000"
            border="1px solid #000"
            fontSize="22px" />
        </ButtonWrapper>
      </TacoHeader>
    </HeaderWrapper>
  )
}
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
  font-size: 22px;
  font-weight: 500;

  span {
    margin-right: 7px;
  }
`
const ButtonWrapper = styled.div`
  margin-right: 8px;
`

export const Header = ({ tacoCount, setTacoCount }) => {
  return (
    <HeaderWrapper>
      <TacoHeader>
        <TitleWrapper>
          <Title><span>&#8226;</span> T A C O T E S T I N G</Title>
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
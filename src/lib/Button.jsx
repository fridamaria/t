import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #E7E7E9;
  border-radius: 8px;
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;


  &:hover {
    background: #E7E7E9;
  }
`

export const Button = ({ title }) => {
  return <StyledButton>{title}</StyledButton>
}
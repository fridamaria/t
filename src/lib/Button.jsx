import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 44px;
  margin: 0 8px;
  padding: 10px 16px;
  border: 1px solid #E7E7E9;
  border-radius: 8px;
  background: #fff;
  font-weight: 600;
  font-size: ${(props) => props.fontSize || '14px'};
  line-height: 24px;

  &:hover {
    background: ${(props) => props.hover || '#E7E7E9'};
    border: ${(props) => props.border || '1px solid #E7E7E9'}
  }
`

export const Button = ({ text, onClick, hover, border, fontSize }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      hover={hover}
      border={border}
      fontSize={fontSize}>
      {text}
    </StyledButton>
  )
}
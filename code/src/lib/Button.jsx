import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 44px;
  margin: 0 8px;
  padding: 10px 16px;
  border: 1px solid #E7E7E9;
  border-radius: 8px;
  outline: none;
  background: #fff;
  color: '#000';
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || '14px'};
  line-height: 24px;

  &:hover {
    background: ${(props) => props.hover || '#E7E7E9'};
    border: ${(props) => props.border || '1px solid #E7E7E9'}
  }

  ${(props) => props.disabled && ({
    color: '#E7E7E9',

    '&:hover': {
      background: '#fff'
    }
  })}
`
const Icon = styled.i`
  margin-right: ${(props) => props.margin || '0'};
`

export const Button = ({
  onClick,
  hover,
  border,
  fontSize,
  buttonIcon,
  margin,
  disabled,
  children
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      hover={hover}
      border={border}
      fontSize={fontSize}
      disabled={disabled}>
      {buttonIcon && <Icon margin={margin}><FontAwesomeIcon icon={buttonIcon} /></Icon>}
      {children}
    </StyledButton>
  )
}
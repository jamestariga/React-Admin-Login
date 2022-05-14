import styled from 'styled-components'

export const PasswordInput = styled.input`
  max-width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-bottom: 1px solid #000;
  }

  &:invalid {
    border-bottom: 1px solid #f00;
  }
`

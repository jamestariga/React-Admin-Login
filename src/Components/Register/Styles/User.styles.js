import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const UserInput = styled.input`
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

  /* &:invalid {
    border-bottom: 1px solid #f00;
  } */
`

export const InstructionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 0.5rem;
  background: #333;
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 2rem;
  position: ${(props) =>
    props.userFocus && props.user && !props.validUser
      ? 'relative'
      : 'absolute'};
  bottom: ${(props) =>
    props.userFocus && props.user && !props.validUser ? '-10px' : '9999px'};
  left: ${(props) =>
    !props.userFocus && !props.user && props.validUser ? '-9999px' : '0'};
`

export const Instructions = styled.p`
  font-size: 0.75rem;
  line-height: 1.25rem;
`

export const InfoIcon = styled(AiOutlineInfoCircle)`
  display: block;
  margin: 0 0.5rem;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;

  @media screen and (min-width: 640px) {
    font-size: 1.75rem;
  }
`

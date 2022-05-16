import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const MatchPasswordInput = styled.input`
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

export const MatchPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 0.5rem;
  background: #333;
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 2rem;
  position: ${(props) =>
    props.matchPasswordFocus && props.matchPassword && !props.validMatchPassword
      ? 'relative'
      : 'absolute'};
  bottom: ${(props) =>
    props.matchPasswordFocus && props.matchPassword && !props.validMatchPassword
      ? '-10px'
      : '9999px'};
  left: ${(props) =>
    !props.matchPasswordFocus &&
    !props.matchPassword &&
    props.validMatchPassword
      ? '-9999px'
      : '0'};
`

export const MatchPasswordInfo = styled.p`
  font-size: 0.75rem;
`

export const InfoIcon = styled(AiOutlineInfoCircle)`
  display: block;
  margin: 0 0.5rem;
  color: #fff;
  font-size: 2.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  @media screen and (min-width: 640px) {
    font-size: 1.75rem;
  }
`

import styled from 'styled-components'
import { FaCheck, FaTimes } from 'react-icons/fa'

export const CheckIcon = styled(FaCheck)`
  color: #129900;
  margin-left: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: ${(props) => (props.validity && props.other ? 'block' : 'none')};
`

export const IncorrectIcon = styled(FaTimes)`
  color: #f00;
  margin-left: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: ${(props) => (props.validity && props.other ? 'block' : 'none')};
`

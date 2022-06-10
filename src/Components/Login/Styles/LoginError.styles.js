import styled from 'styled-components'

export const ErrorContainer = styled.div`
  position: ${(props) => (props.error ? 'absolute' : 'relative')};
  top: ${(props) => (props.error ? '-9999px' : '-2rem')};
  background: ${(props) => (props.error ? 'lightpink' : 'transparent')};
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  p {
    color: firebrick;
    font-weight: bold;
  }
`

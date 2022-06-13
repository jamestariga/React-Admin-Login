import styled from 'styled-components'

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  height: 100vh;
`

export const Container = styled.div`
  height: 80vh;
  width: 80%;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;

  @media (max-width: 875px) {
    flex-direction: column;
  }
`
export const SideContainer = styled.div`
  background-image: url('../../../../../../bg.jpg');
  background-size: cover;
  flex: 60%;
  display: flex;

  @media (max-width: 875px) {
    display: none;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f7f7f7;
  color: #333;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  button {
    padding: 1rem;
    font-size: 1.25em;
    font-weight: bold;
    border-radius: 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    transition: 0.3s;
    position: relative;
    cursor: pointer;

    &::after {
      content: 'Sign up';
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: inherit;
      transition: opacity 0.3s;
      background: linear-gradient(#1cd8d2, #93edc7);
    }

    &:hover::after {
      opacity: 1;
    }
  }

  a {
    color: #337ee8;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #2dfcf1;
    }
  }

  @media (max-width: 875px) {
    h1 {
      font-size: 1.5rem;
    }

    button {
      font-size: 1rem;
    }
  }

  @media (max-height: 768px) {
    label {
      font-size: 1rem;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    form {
      gap: 0.5rem;
      padding: 0;
    }

    input {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      padding: 0.75rem;
    }

    a {
      font-size: 0.75rem;
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  input {
    margin-bottom: ${(props) =>
      props.userFocus && props.user && !props.validUser ? '2rem' : '0'};
  }

  label {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  @media (max-width: 875px) {
    label {
      font-size: 1rem;
    }
  }

  @media (max-height: 768px) {
    label {
      font-size: 1rem;
    }

    gap: 0;
  }
`
export const ErrorContainer = styled.div`
  position: ${(props) => (props.error ? 'absolute' : 'relative')};
  top: ${(props) => (props.error ? '-9999px' : '-2rem')};
  background: ${(props) => (props.error ? 'lightpink' : 'transparent')};
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`

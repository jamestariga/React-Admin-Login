import styled from 'styled-components'

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  height: 100vh;
`

export const LoginContainer = styled.div`
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
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

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
    margin: 2rem 0;
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
      content: 'Submit';
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

  @media (max-height: 635px) {
    label {
      font-size: 1rem;
    }

    h1 {
      font-size: 1.5rem;
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

export const PersistCheckbox = styled.div`
  font-size: 0.75rem;
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }

  label {
    font-size: 1.25rem;
    margin-left: 0.25rem;
    font-weight: bold;
  }

  @media (max-width: 675px) {
    input[type='checkbox'] {
      width: 1rem;
      height: 1rem;
    }

    label {
      font-size: 1rem;
    }
  }
`

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
    font-size: 1.25em;
    font-weight: bold;
    border-radius: 2rem;
    border: 1px solid #333;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #2dfcf1;
    }
  }

  @media (max-width: 875px) {
    h1 {
      font-size: 1.5rem;
    }

    button {
      font-size: 1rem;
    }

    height: 80vh;
  }
`

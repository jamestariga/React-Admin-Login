import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  background-color: firebrick;
  padding: 0 4rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  border-radius: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  a {
    margin-top: 1rem;
    text-decoration: none;
    color: inherit;
    margin: 0 -0.25rem;
    padding: 0 0.35rem;
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    border-radius: 0.5rem;

    &:hover {
      box-shadow: inset 130px 0 0 0 #54b3d6;
      color: white;
    }
  }

  p {
    padding: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  @media (max-width: 1078px) {
    width: 80vw;

    p {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  @media (max-width: 896px) {
    width: 70vw;
    padding: 0 2rem;
  }

  @media (max-height: 768px) {
    height: 80vh;
    width: 80vw;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

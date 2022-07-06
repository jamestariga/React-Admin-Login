import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 20px;
  background-color: #ccc;
  width: 100%;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.5rem;
  }

  button {
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1078px) {
    width: 100%;
  }
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 1rem;
  border: 1px solid #333;
  background-color: #444;
  border-radius: 20px;
  padding: 0 1rem;

  thead {
    color: #fff;
    font-weight: bold;
  }

  tbody {
    text-align: center;
    color: #fff;
  }

  @media (max-width: 574px) {
    font-size: 0.8rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 20px;
  background-color: #ccc;
  width: 100%;

  label {
    margin: 0.75rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  @media (max-width: 952px) {
    flex-direction: column;
  }
`
export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #54b3d6;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #333;
  }
`

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { USER_REGEX, PWD_REGEX } from '../../Utils/Regex'
import {
  Backdrop,
  Container,
  FormContainer,
  FormGroup,
  SideContainer,
} from './Styles/Register.styles'
import User from './User'
import Password from './Password'
import MatchPassword from './MatchPassword'

const Register = () => {
  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [matchPassword, setMatchPassword] = useState('')
  const [validMatchPassword, setValidMatchPassword] = useState(false)
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const userRef = useRef()
  const passwordRef = useRef()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidUser(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(password)
    console.log(result)
    console.log(password)
    setValidPassword(result)
    const match = password === matchPassword
    console.log(match)
    setValidMatchPassword(match)
  }, [password, matchPassword])

  return (
    <>
      <Backdrop>
        <Container>
          <SideContainer />
          <FormContainer>
            <h1>Register</h1>
            <form>
              <FormGroup>
                <label htmlFor='username'>Username:</label>
                <User
                  user={user}
                  setUser={setUser}
                  userFocus={userFocus}
                  setUserFocus={setUserFocus}
                  validUser={validUser}
                  userRef={userRef}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor='password'>Password:</label>
                <Password
                  password={password}
                  setPassword={setPassword}
                  passwordFocus={passwordFocus}
                  setPasswordFocus={setPasswordFocus}
                  validPassword={validPassword}
                  passwordRef={passwordRef}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor='matchpassword'>Confirm Password:</label>
                <MatchPassword
                  matchPassword={matchPassword}
                  setMatchPassword={setMatchPassword}
                  matchPasswordFocus={matchPasswordFocus}
                  setMatchPasswordFocus={setMatchPasswordFocus}
                  validMatchPassword={validMatchPassword}
                />
              </FormGroup>
              <button>Sign up</button>
            </form>
          </FormContainer>
        </Container>
      </Backdrop>
    </>
  )
}

export default Register

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
import { CheckIcon, IncorrectIcon } from '../../Utils/Icons'
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
    console.log(`Username: ${result}`)
    console.log(user)
    setValidUser(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(password)
    console.log(result)
    console.log(`Password: ${password}`)
    setValidPassword(result)
    const match = password === matchPassword
    console.log(match)
    setValidMatchPassword(match)
  }, [password, matchPassword])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const secureUser = USER_REGEX.test(user)
    const securePassword = PWD_REGEX.test(password)

    if (!secureUser || !securePassword) {
      setError('Invalid username or password')
      setSuccess(false)
      console.log(error)
      return
    } else {
      setError('')
      setSuccess(true)
      console.log(`success: ${success}`)
      console.log(`User: ${user}`)
      console.log(`Password: ${password}`)
      console.log(`Match Password: ${matchPassword}`)
    }
  }

  return (
    <>
      <Backdrop>
        <Container>
          <SideContainer />
          <FormContainer>
            {success ? (
              <h1>Success!</h1>
            ) : (
              <>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label htmlFor='username'>
                      Username:{' '}
                      {validUser ? (
                        <CheckIcon validity='true' other={user} />
                      ) : (
                        <IncorrectIcon validity='true' other={user} />
                      )}
                    </label>
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
                    <label htmlFor='password'>
                      Password:{' '}
                      {validPassword ? (
                        <CheckIcon validity='true' other={password} />
                      ) : (
                        <IncorrectIcon validity='true' other={password} />
                      )}
                    </label>
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
                    <label htmlFor='matchpassword'>
                      Confirm Password:{' '}
                      {validMatchPassword ? (
                        <CheckIcon validity='true' other={matchPassword} />
                      ) : (
                        <IncorrectIcon validity='true' other={matchPassword} />
                      )}
                    </label>
                    <MatchPassword
                      matchPassword={matchPassword}
                      setMatchPassword={setMatchPassword}
                      matchPasswordFocus={matchPasswordFocus}
                      setMatchPasswordFocus={setMatchPasswordFocus}
                      validMatchPassword={validMatchPassword}
                    />
                  </FormGroup>
                  <button
                    disabled={
                      !validUser || !validPassword || !validMatchPassword
                        ? true
                        : false
                    }
                  >
                    Sign up
                  </button>
                </form>
              </>
            )}
          </FormContainer>
        </Container>
      </Backdrop>
    </>
  )
}

export default Register

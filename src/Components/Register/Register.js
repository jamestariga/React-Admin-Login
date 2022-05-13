import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { USER_REGEX, PWD_REGEX } from '../../Utils/Regex'
import User from './User'

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
    setValidUser(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
    setValidMatchPassword(password === matchPassword)
  }, [password, matchPassword])

  return (
    <>
      <User
        user={user}
        setUser={setUser}
        userFocus={userFocus}
        setUserFocus={setUserFocus}
        validUser={validUser}
        userRef={userRef}
      />
    </>
  )
}

export default Register

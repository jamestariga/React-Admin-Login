import { useState, useEffect, useRef } from 'react'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const userRef = useRef()
  const errRef = useRef()

  return (
    <>
      <h1>Login</h1>
    </>
  )
}

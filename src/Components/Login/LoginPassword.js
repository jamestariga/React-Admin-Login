import React from 'react'
import { PasswordInput } from './Styles/LoginPassword.styles'

const LoginUser = (props) => {
  const { password, setPassword } = props

  return (
    <>
      <PasswordInput
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </>
  )
}

export default LoginUser

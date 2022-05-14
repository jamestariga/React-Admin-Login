import React from 'react'
import { PasswordInput } from './Styles/Password.styles'

const Password = (props) => {
  const {
    Password,
    setPassword,
    passwordFocus,
    setPasswordFocus,
    validPassword,
    passwordRef,
  } = props

  return (
    <>
      <PasswordInput
        type='password'
        id='password'
        ref={passwordRef}
        value={Password}
        autoComplete='off'
        required
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        aria-invalid={validPassword ? 'false' : 'true'}
        aria-describedby='pwdnote'
      />
    </>
  )
}

export default Password

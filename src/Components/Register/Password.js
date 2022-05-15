import React from 'react'
import {
  PasswordInput,
  PasswordContainer,
  PasswordInfo,
  InfoIcon,
} from './Styles/Password.styles'

const Password = (props) => {
  const {
    password,
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
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        aria-invalid={validPassword ? 'false' : 'true'}
        aria-describedby='pwdnote'
      />
      <PasswordContainer
        password={password}
        passwordFocus={passwordFocus}
        validPassword={validPassword}
      >
        <InfoIcon />
        <PasswordInfo id='pwdnote'>
          Password must be at least 8 characters long, contains a capital
          letter, digits and a special characters.
        </PasswordInfo>
      </PasswordContainer>
    </>
  )
}

export default Password

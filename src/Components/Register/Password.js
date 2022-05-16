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
        aria-describedby='matchpwdnote'
      />
      <PasswordContainer
        password={password}
        passwordFocus={passwordFocus}
        validPassword={validPassword}
      >
        <InfoIcon />
        <PasswordInfo id='matchpwdnote'>
          8 to 24 characters. Must include uppercase and lowercase letters, a
          number and a special character. Allowed special characters:{' '}
          <span aria-label='exclamation mark'>!</span>{' '}
          <span aria-label='at symbol'>@</span>{' '}
          <span aria-label='hashtag'>#</span>{' '}
          <span aria-label='dollar sign'>$</span>{' '}
          <span aria-label='percent'>%</span>
        </PasswordInfo>
      </PasswordContainer>
    </>
  )
}

export default Password

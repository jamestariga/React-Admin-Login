import React from 'react'

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
      <input
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

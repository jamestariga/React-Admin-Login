import React from 'react'
import { UserInput } from './Styles/User.styles'

const User = (props) => {
  const { user, setUser, userFocus, setUserFocus, validUser, userRef } = props

  return (
    <>
      <UserInput
        type='text'
        id='username'
        ref={userRef}
        value={user}
        autoComplete='off'
        required
        onChange={(e) => setUser(e.target.value)}
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        aria-invalid={validUser ? 'false' : 'true'}
        aria-describedby='uidnote'
      />
    </>
  )
}

export default User

import React from 'react'
import { UserInput } from './Styles/loginUser.styles'

const LoginUser = (props) => {
  const { user, setUser, userRef } = props

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
      />
    </>
  )
}

export default LoginUser

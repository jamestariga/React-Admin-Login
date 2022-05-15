import React from 'react'
import {
  UserInput,
  InstructionContainer,
  Instructions,
  InfoIcon,
} from './Styles/User.styles'

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
      <InstructionContainer
        userFocus={userFocus}
        user={user}
        validUser={validUser}
      >
        <InfoIcon />
        <Instructions id='uidnote'>
          Username must be at least 4 characters long and contain only letters,
          a hypen, and an underscore.
        </Instructions>
      </InstructionContainer>
    </>
  )
}

export default User

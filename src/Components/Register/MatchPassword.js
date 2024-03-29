import React from 'react'
import {
  MatchPasswordContainer,
  MatchPasswordInput,
  MatchPasswordInfo,
  InfoIcon,
} from './Styles/MatchPassword.styles'

const MatchPassword = (props) => {
  const {
    matchPassword,
    setMatchPassword,
    matchPasswordFocus,
    setMatchPasswordFocus,
    validMatchPassword,
  } = props

  return (
    <>
      <MatchPasswordInput
        type='password'
        id='matchpassword'
        value={matchPassword}
        required
        onChange={(e) => setMatchPassword(e.target.value)}
        onFocus={() => setMatchPasswordFocus(true)}
        onBlur={() => setMatchPasswordFocus(false)}
        aria-invalid={validMatchPassword ? 'false' : 'true'}
        aria-describedby='matchpwdnote'
      />
      <MatchPasswordContainer
        matchPassword={matchPassword}
        matchPasswordFocus={matchPasswordFocus}
        validMatchPassword={validMatchPassword}
      >
        <InfoIcon />
        <MatchPasswordInfo id='matchpwdnote'>
          Password must match the entered password above.
        </MatchPasswordInfo>
      </MatchPasswordContainer>
    </>
  )
}

export default MatchPassword

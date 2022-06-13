import React from 'react'
import { ErrorContainer } from './Styles/LoginError.styles'

const LoginError = (props) => {
  const { errMsg, error, errRef } = props

  return (
    <>
      {error && (
        <ErrorContainer ref={errRef}>
          <p>{errMsg}</p>
        </ErrorContainer>
      )}
    </>
  )
}

export default LoginError

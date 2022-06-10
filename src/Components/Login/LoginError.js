import React from 'react'
import { ErrorContainer } from './Styles/LoginError.styles'

const LoginError = (props) => {
  const { errMsg, errRef } = props

  return (
    <>
      <ErrorContainer>
        <p ref={errRef}>{errMsg}</p>
      </ErrorContainer>
    </>
  )
}

export default LoginError

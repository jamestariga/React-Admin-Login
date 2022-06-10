import { useState, useEffect, useRef } from 'react'
import LoginUser from './LoginUser'
import LoginPassword from './LoginPassword'
import LoginError from './LoginError'
import {
  Backdrop,
  LoginContainer,
  SideContainer,
  FormGroup,
  FormContainer,
} from './Styles/Login.styles'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const userRef = useRef()
  const errRef = useRef()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setError('')
  }, [user, password])

  return (
    <>
      <Backdrop>
        <LoginContainer>
          <SideContainer />
          <FormContainer>
            <h1>Welcome!</h1>
            {error && <LoginError errMsg={errMsg} errRef={errRef} />}
            <form>
              <FormGroup>
                <label>Username</label>
                <LoginUser user={user} setUser={setUser} userRef={userRef} />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <LoginPassword password={password} setPassword={setPassword} />
              </FormGroup>
              <button disabled={!user || !password ? true : false}>
                Submit
              </button>
            </form>
          </FormContainer>
        </LoginContainer>
      </Backdrop>
    </>
  )
}

export default Login

import { useState, useEffect, useRef, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import axios from '../../api/axios'
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

const LOGIN_URL = '/auth'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const userRef = useRef()
  const errRef = useRef()

  const { setAuth } = useContext(AuthContext)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.accessToken
      const roles = response?.data?.roles
      setAuth({ user, password, roles, accessToken })
      setUser('')
      setPassword('')
      setSuccess(true)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
        setError(true)
      } else if (err.response?.status === 400) {
        setErrMsg('Invalid username or password.')
        setError(true)
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized.')
        setError(true)
      } else {
        setErrMsg('Something went wrong. Please try again.')
        setError(true)
      }
      errRef.current.focus()
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log(user, password)
  //   setUser('')
  //   setPassword('')
  //   setSuccess(true)
  // }

  return (
    <>
      <Backdrop>
        <LoginContainer>
          <SideContainer />
          <FormContainer>
            {success ? (
              <>
                <h1>Login Successful!</h1>
                {/* <button onSubmit={handleLogout}>Logout</button> */}
              </>
            ) : (
              <>
                <h1>Welcome!</h1>
                <LoginError errMsg={errMsg} error={error} errRef={errRef} />
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label htmlFor='username'>Username:</label>
                    <LoginUser
                      user={user}
                      setUser={setUser}
                      userRef={userRef}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor='password'>Password:</label>
                    <LoginPassword
                      password={password}
                      setPassword={setPassword}
                    />
                  </FormGroup>
                  <button>Submit</button>
                </form>
                <p>
                  Need an account?
                  {/* Change this to a router link */}
                  <span>
                    <a href='#'> Sign up</a>
                  </span>
                </p>
              </>
            )}
          </FormContainer>
        </LoginContainer>
      </Backdrop>
    </>
  )
}

export default Login

import { useState, useEffect, useRef } from 'react'
import useAuth from '../../Hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
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
  PersistCheckbox,
} from './Styles/Login.styles'

const LOGIN_URL = '/auth'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [error, setError] = useState(false)

  const userRef = useRef()
  const errRef = useRef()

  const { setAuth, persist, setPersist } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/home'

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, password])

  useEffect(() => {
    localStorage.setItem('persist', persist)
  }, [persist])

  const togglePersist = () => {
    setPersist((prev) => !prev)
  }

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
      navigate(from, { replace: true })
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

  return (
    <>
      <Backdrop>
        <LoginContainer>
          <SideContainer />
          <FormContainer>
            <>
              <h1>Welcome!</h1>
              <LoginError errMsg={errMsg} error={error} errRef={errRef} />
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor='username'>Username:</label>
                  <LoginUser user={user} setUser={setUser} userRef={userRef} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='password'>Password:</label>
                  <LoginPassword
                    password={password}
                    setPassword={setPassword}
                  />
                </FormGroup>
                <button>Sign In</button>
                <PersistCheckbox>
                  <input
                    id='persist'
                    type={'checkbox'}
                    checked={persist}
                    onChange={togglePersist}
                  />
                  <label htmlFor='persist'>Trust This Device</label>
                </PersistCheckbox>
              </form>
              <label>
                Need an account?
                <span>
                  <Link to='/register'> Sign up</Link>
                </span>
              </label>
            </>
          </FormContainer>
        </LoginContainer>
      </Backdrop>
    </>
  )
}

export default Login

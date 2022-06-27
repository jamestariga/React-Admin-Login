import { Wrapper, Container } from './Styles/Pages.styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth({})
    navigate('/login')
  }

  return (
    <>
      <Wrapper>
        <Container>
          <h1>Home</h1>
          <div>
            <p>
              Go to the <Link to='/admin'>Admin</Link> Page
            </p>
          </div>
          <div>
            <p>
              Go to the <Link to='/editor'>Editor</Link> Page
            </p>
          </div>
          <div>
            <p>
              Go to the <Link to='/lounge'>Lounge</Link> Page
            </p>
          </div>
          <button onClick={handleLogout}>Sign out</button>
        </Container>
      </Wrapper>
    </>
  )
}

export default Home

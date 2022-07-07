import { Wrapper, Container } from './Styles/Pages.styles'
import { useNavigate, Link } from 'react-router-dom'
import useLogout from '../Hooks/useLogout'

const Home = () => {
  const navigate = useNavigate()
  const logout = useLogout()

  const handleLogout = async () => {
    await logout()
    navigate('/')
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

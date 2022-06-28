import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Public = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Public Pages</h1>
          <div>
            <p>
              <Link to='/register'>Register</Link> for a new account
            </p>
          </div>
          <div>
            <p>
              <Link to='/login'>Login</Link> to your account
            </p>
          </div>
          <h1>Private Pages</h1>
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
        </Container>
      </Wrapper>
    </>
  )
}

export default Public

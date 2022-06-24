import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Public = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Public</h1>
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
        </Container>
      </Wrapper>
    </>
  )
}

export default Public

import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Admin = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Admin Page</h1>
          <p>Admin can chill here!</p>
          <p>
            <Link to='/home'>Go Home</Link>
          </p>
        </Container>
      </Wrapper>
    </>
  )
}

export default Admin

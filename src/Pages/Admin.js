import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'
import Users from '../Components/User/Users'

const Admin = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Admin Page</h1>
          <p>Admin can chill here!</p>
          <Users />
          <p>
            <Link to='/home'>Go Home</Link>
          </p>
        </Container>
      </Wrapper>
    </>
  )
}

export default Admin

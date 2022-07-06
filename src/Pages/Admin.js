import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Admin.styles'
import Users from '../Components/User/Users'

const Admin = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Admin Page</h1>
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

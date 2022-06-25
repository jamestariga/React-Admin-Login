import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Lounge = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Lounge Page</h1>
          <p>Admin and Editors can chill here!</p>
          <p>
            <Link to='/home'>Go Home</Link>
          </p>
        </Container>
      </Wrapper>
    </>
  )
}

export default Lounge

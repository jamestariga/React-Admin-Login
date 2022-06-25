import { Wrapper, Container } from './Styles/Pages.styles'
import { Link } from 'react-router-dom'

const Home = () => {
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
        </Container>
      </Wrapper>
    </>
  )
}

export default Home

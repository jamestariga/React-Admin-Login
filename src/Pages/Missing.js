import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Missing = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>ERROR 404!</h1>
          <p>Page Not Found</p>
          <p>
            Visit Our <Link to='/'>Page</Link>
          </p>
        </Container>
      </Wrapper>
    </>
  )
}

export default Missing

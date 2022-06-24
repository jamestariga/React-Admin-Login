import { Link } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Editor = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Editor Page</h1>
          <p>Editors and Admins can chill here!</p>
          <p>
            <Link to='/home'>Go Home</Link>
          </p>
        </Container>
      </Wrapper>
    </>
  )
}

export default Editor

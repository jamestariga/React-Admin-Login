import { useNavigate } from 'react-router-dom'
import { Wrapper, Container } from './Styles/Pages.styles'

const Unauthorize = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate(-1)

  return (
    <>
      <Wrapper>
        <Container>
          <h1>Unauthorized!</h1>
          <p>You do not have access to the requested page.</p>
          <button onClick={handleClick}>Go Back</button>
        </Container>
      </Wrapper>
    </>
  )
}

export default Unauthorize

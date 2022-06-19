import { Outlet } from 'react-router-dom'
import { Container } from './Styles/Pages.styles'

const Layout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout

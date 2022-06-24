import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './Styles/Pages.styles'

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}

export default Layout

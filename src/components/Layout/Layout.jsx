import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ isLogin }) => {
  const location = useLocation()

  return (
    <>
      <Header isLogin={ isLogin }/>
      <Outlet/>
      { location.pathname === '/profile' ? '' : <Footer/> }
    </>
  )
}

export default Layout
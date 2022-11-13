import { Navigate, useLocation, } from 'react-router-dom'

const ProtectedRoute = ({ loggedIn, children }) => {
  const location = useLocation()
  const token = localStorage.getItem('token')

  const way = false
  const way2 = token ? location.pathname === '/saved-movies' || location.pathname === '/movies' || location.pathname === '/profile' : false

  return loggedIn ? children : <Navigate to={ way === way2 ? '/' : '' } replace/>
}

export default ProtectedRoute
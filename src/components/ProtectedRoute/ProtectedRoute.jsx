import { Navigate, Route } from 'react-router-dom'

const ProtectedRoute = ({ loggedIn, children }) => {
  return loggedIn ? children : <Navigate to='/'/>
}

export default ProtectedRoute
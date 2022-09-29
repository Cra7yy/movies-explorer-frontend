import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SaveMovies from '../SaveMovies/SaveMovies'
import NotFound from '../NotFound/NotFound'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useState } from 'react'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  const handleOpenLogin = () => {
    setIsLogin(true)
  }

  const handleCloseLogin = () => {
    setIsLogin(false)
  }

  return (
    <Routes>
      <Route path='/' element={ <Layout isLogin={ isLogin }/> }>
        <Route index element={ <Main/> }/>
        <Route path='movies' element={ <Movies/> }/>
        <Route path='saved-movies' element={ <SaveMovies/> }/>
        <Route path='profile' element={ <Profile clickCloseLogin={ handleCloseLogin }/> }/>
      </Route>
      <Route path='/signup' element={ <Register/> }/>
      <Route path='/signin' element={ <Login clickOpenLogin={ handleOpenLogin }/> }/>
      <Route path='/*' element={ <NotFound/> }/>
    </Routes>
  )
}

export default App
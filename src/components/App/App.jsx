import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SaveMovies from '../SaveMovies/SaveMovies'
import NotFound from '../NotFound/NotFound'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import CurrentUserContext from '../../context/CurrentUserContext'
import * as moviesApi from '../../utils/MoviesApi'
import * as mainApi from '../../utils/MainApi'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useState, useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [movies, setMovies] = useState([])
  const [saveMovies, setSaveMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [savedMoviesFilter, setSavedMoviesFilter] = useState([])
  const [isMoviesError, setIsMoviesError] = useState(false)
  const [preloader, setPreloader] = useState(false)
  const [errorLoginMessage, setErrorLoginMessage] = useState('')
  const [errorRegisterMessage, setErrorRegisterMessage] = useState('')
  const [errorProfileMessage, setErrorProfileMessage] = useState(false)
  const [profileMessage, setProfileMessage] = useState(false)
  const [popup, setPopup] = useState(false)
  const [reloading, setReloading] = useState(false)

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      setPreloader(true)
      mainApi.getApiUserInfo(token)
        .then(res => {
          setCurrentUser(res)
          setReloading(true)
        })
        .catch(err => console.log(`Имя пользователя не получено: ${ err }`))
        .finally(() => setPreloader(false))
    } else {
      signOut()
    }
  }, [token])

  useEffect(() => {
    if (token) {
      setPreloader(true)
      mainApi.getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true)
          }
        })
        .catch(err => console.log(err))
        .finally(() => setPreloader(false))
    }
  }, [token])

  const handleGetMovies = () => {
    if (token) {
      setPreloader(true)
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res))
          // setMovies(JSON.parse(localStorage.getItem('movies')))
          setMovies(res)
          setIsMoviesError(false)
        })
        .catch((err) => {
          setIsMoviesError(true)
          console.log(`Фильмы не удалось получить: ${ err }`)
        })
        .finally(() => setPreloader(false))
    }
  }

  useEffect(() => {
    if (token && currentUser !== null) {
      // setPreloader(true)
      mainApi.getSavedMovies(token)
        .then(res => {
          localStorage.setItem('savedMovies', JSON.stringify(res.filter((i) => i.owner === currentUser._id)))
          setSaveMovies(JSON.parse(localStorage.getItem('savedMovies')))
        })
        .catch((err) => {
          console.log(`Сохраненные фильмы не удалось получить: ${ err }`)
        })
    }
  }, [token, currentUser])

  const handleRegister = ({ name, email, password }) => {
    setPreloader(true)
    mainApi.register(name, email, password)
      .then((data) => {
        if (data._id) {
          handleLogin({ email, password })
        }
      })
      .then(() => navigate('/movies'))
      .catch(err => {
        setErrorRegisterMessage('что то пошло не так ...')
        console.log(err)
      })
      .finally(() => setPreloader(false))
  }

  const handleLogin = ({ email, password }) => {
    setPreloader(true)
    mainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          setLoggedIn(true)
          setErrorLoginMessage('')
          navigate('/movies')
        }
      })
      .catch(() => {
        setErrorLoginMessage('Не правильный email или password')
      })
      .finally(() => setPreloader(false))
  }

  const signOut = () => {
    setMovies([])
    setCurrentUser({})
    setLoggedIn(false)
    setSaveMovies([])
    localStorage.removeItem('filtered')
    localStorage.removeItem('SearchValue')
    localStorage.removeItem('searchSaveValue')
    localStorage.removeItem('check')
    localStorage.removeItem('movies')
    localStorage.removeItem('saveCheck')
    localStorage.removeItem('saveSearchValue')
    localStorage.removeItem('savedFilter')
    localStorage.removeItem('savedMovies')
    localStorage.removeItem('saveMovies')
    localStorage.removeItem('token')
  }

  const handleProfile = (user) => {
    setPreloader(true)
    mainApi.patchUserInfo(token, user)
      .then((data) => {
        if (currentUser.email !== data.email || currentUser.name !== data.email) {
          setCurrentUser(data)
          setErrorProfileMessage(false)
          setPopup(true)
        }
      })
      .catch(() => {
        setPopup(false)
        setErrorProfileMessage(true)
      })
      .finally(() => setPreloader(false))
  }

  const handleSaveMovie = (movie) => {
    const like = saveMovies.some((el) =>
      el.movieId === movie.id
    )
    if (!like) {
      mainApi.saveMovie(movie, token).then(res => {
        setSaveMovies([...saveMovies, res])
        localStorage.setItem('savedFilter', JSON.stringify([...saveMovies, res]))
        localStorage.setItem('savedMovies', JSON.stringify([...saveMovies, res]))
      })
    } else {
      const dislike = saveMovies.find((el) => el.movieId === movie.id)
      handleDeleteMovie(dislike)
    }
  }

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(token, movie._id)
      .then(() => {
        const card = saveMovies.filter((el) => el._id !== movie._id)
        setSavedMoviesFilter(card)
        setSaveMovies(card)
        localStorage.setItem('savedFilter', JSON.stringify(card))
        localStorage.setItem('savedMovies', JSON.stringify(card))

      })
  }

  const handleSearch = (data) => {
    const value = localStorage.getItem('SearchValue')
    const moviesArr = JSON.parse(localStorage.getItem('movies'))
    const check = JSON.parse(localStorage.getItem('check'))

    if (movies.length === 0 && moviesArr === null) {
      handleGetMovies()
    }

    const moviesArray = moviesArr === null ? movies : moviesArr

    if (check === true) {
      const shortsFilm = moviesArray.filter((movie) => movie.duration <= 40)
      const sortedSavedMovieSearch = shortsFilm.filter((movie) => {
        return (movie.nameEN && movie.nameEN.toLowerCase().includes(value.toLowerCase()) && value !== '')
        || (movie.nameRU && movie.nameRU.toLowerCase().includes(value.toLowerCase()) && value !== '')
          ? movie : null
      })
      localStorage.setItem('filtered', JSON.stringify(sortedSavedMovieSearch))
      setFilteredMovies(sortedSavedMovieSearch)
    } else {
      const sortedMovieSearch = moviesArray.filter((movie) => {
        return (movie.nameEN && movie.nameEN.toLowerCase().includes(value.toLowerCase()) && value !== '')
        || (movie.nameRU && movie.nameRU.toLowerCase().includes(value.toLowerCase()) && value !== '')
          ? movie : null
      })
      localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch))
      setFilteredMovies(sortedMovieSearch)
    }
  }

  const handleSearchSaved = (data) => {
    const moviesArr = JSON.parse(localStorage.getItem('savedFilter'))
    const movieArr = []

    if (moviesArr === null && reloading) {
      setReloading(false)
      movieArr.push(...saveMovies)
    } else if (reloading) {
      setReloading(false)
      movieArr.push(...moviesArr)
    } else {
      movieArr.push(...saveMovies)
    }

    const sortedMovieSearch = movieArr.filter((movie) => {
      return ((movie.nameEN && movie.nameEN.toLowerCase().includes(data.toLowerCase()))
        || (movie.nameRU && movie.nameRU.toLowerCase().includes(data.toLowerCase())))
        ? movie : null
    })
    localStorage.setItem('savedFilter', JSON.stringify(sortedMovieSearch))
    setSavedMoviesFilter(sortedMovieSearch.length !== 0 ? sortedMovieSearch : saveMovies)
  }

  const durationSwitch = (checked) => {
    const check = JSON.parse(localStorage.getItem('check'))
    const filterMovies = JSON.parse(localStorage.getItem('filtered'))
    if (check === true && filterMovies) {
      const shortsFilm = filterMovies.filter((movie) => movie.duration <= 40)
      setFilteredMovies(shortsFilm)
    } else {
      setFilteredMovies(filterMovies)
    }
  }

  const savedDurationSwitch = (checked) => {
    const saveMoviesFilter = JSON.parse(localStorage.getItem('savedFilter'))
    if (checked === true && saveMoviesFilter) {
      const shortsFilm = saveMoviesFilter.filter((movie) => movie.duration <= 40)
      setSavedMoviesFilter(shortsFilm)
    } else {
      setSavedMoviesFilter(saveMoviesFilter)
    }
  }

  const handleClosePopup = () => {
    setPopup(false)
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <Routes>

        <Route path='/' element={ <Layout isLogin={ loggedIn }/> }>
          <Route index element={ <Main/> }/>

          <Route
            path='movies'
            element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <Movies
                  preloader={ preloader }
                  isMoviesError={ isMoviesError }
                  handleSaveMovie={ handleSaveMovie }
                  saveMovies={ saveMovies }
                  movieCards={ filteredMovies }
                  durationSwitch={ durationSwitch }
                  handleSearch={ handleSearch }
                  handleDeleteMovie={ handleDeleteMovie }
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='saved-movies'
            element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <SaveMovies
                  saveMovies={ saveMovies }
                  handleDeleteMovie={ handleDeleteMovie }
                  handleSaveMovie={ handleSaveMovie }
                  movieCards={ savedMoviesFilter }
                  handleSearch={ handleSearchSaved }
                  savedDurationSwitch={ savedDurationSwitch }
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='profile'
            element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <Profile
                  setProfileMessage={ setProfileMessage }
                  profileMessage={ profileMessage }
                  signOut={ signOut }
                  handleProfile={ handleProfile }
                  errorProfileMessage={ errorProfileMessage }
                  setErrorProfileMessage={ setErrorProfileMessage }
                  isOpen={ popup }
                  onClose={ handleClosePopup }
                />
              </ProtectedRoute>
            }
          />

        </Route>
        <Route path='signup' element={
          <Register
            handleRegister={ handleRegister }
            errorRegisterMessage={ errorRegisterMessage }/>
        }/>

        <Route path='signin' element={
          <Login
            handleLogin={ handleLogin }
            errorLoginMessage={ errorLoginMessage }/>
        }/>
        <Route path='/*' element={ <NotFound/> }/>
      </Routes>
    </CurrentUserContext.Provider>
  )
}

export default App

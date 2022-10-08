import StyledMoviesCardList from './MoviesCardList.styled'
import MoviesCard from './MoviesCard/MoviesCard'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Preloader from '../../Preloader/Preloader'

const MoviesCardList = ({ handleSaveMovie,
                          saveMovies,
                          handleDeleteMovie,
                          movieCards,
                          isMoviesError,
                          preloader
}) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [moreMovies, setMoreMovies] = useState(4)
  const [numberOfMovies, setNumberOfMovies] = useState(16)
  const [displayButton, setDisplayButton] = useState(false)
  const location = useLocation()

  setInterval(() => {
    setWidth(window.innerWidth)
  }, 1000)

  useEffect(() => {
    if (width >= 1172) {
      setMoreMovies(4)
      setNumberOfMovies(16)
    } else if (width >= 1005 && width <= 1172) {
      setMoreMovies(3)
      setNumberOfMovies(12)
    } else if (width >= 742 && width <= 1005) {
      setMoreMovies(2)
      setNumberOfMovies(8)
    } else if (width <= 742) {
      setMoreMovies(1)
      setNumberOfMovies(5)
    }
  }, [width, movieCards])

  const addMoreMovies = () => {
    setNumberOfMovies(moreMovies + numberOfMovies)
  }

  useEffect(()=>{
    setDisplayButton( movieCards.length <= numberOfMovies)
    if(location.pathname === '/saved-movies'){
      setDisplayButton(true)
      setNumberOfMovies(movieCards.length)
    }
  },[numberOfMovies,movieCards])

  return (
    <StyledMoviesCardList className='movies'>
      <Preloader preloader={preloader}/>
      <ul className='movies__list'>
        { movieCards.map((el, id) => {
          return (<MoviesCard
            key={ el.id ? el.id : id }
            movie={ el }
            handleSaveMovie={ handleSaveMovie }
            saveMovies={ saveMovies }
            handleDeleteMovie={handleDeleteMovie}
          />)
        }).slice(0, numberOfMovies) }
      </ul>
      {isMoviesError && <p className='movies__text'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {movieCards.length === 0 && location.pathname === '/saved-movies' && <p className='movies__text'>Вы пока что ничего не добавили в избранное</p> }
      {movieCards.length === 0 && location.pathname === '/movies' && !isMoviesError ? <p className='movies__text'>Введите название фильма в поисковой строке</p>
        :<button type='button' className={ displayButton ? 'none' : 'movies__btn' } onClick={ addMoreMovies }>Ещё</button>
      }
    </StyledMoviesCardList>
  )
}

export default MoviesCardList
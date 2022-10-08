import StyledMoviesCard from './MoviesCard.styled'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MoviesCard = ({ movie,
                      handleSaveMovie,
                      saveMovies,
                      handleDeleteMovie
}) => {
  const [like, setLike] = useState(false)

  useEffect(() => {
    setLike(!saveMovies.some((el)=> movie.id === el.movieId))
  },[saveMovies])

  const location = useLocation()

  const actionButton = () => {
    return location.pathname === '/saved-movies'
      ? <img className='movies__cross-img' alt='cross' src='/images/cross.svg'/>
      : <>
        <img src='/images/like-active.svg' alt='like' className={ like ? 'none' : 'movies__like-img' }/>
        <img src='/images/like.svg' alt='like' className={ like ? 'movies__like-img' : 'none' }/>
      </>
  }

  return (
    <StyledMoviesCard className='movies__item'>
      <a className='movies__link-a' href={ movie.trailerLink }>
        <img className='movies__img' src={ location.pathname === '/movies' ?
          `https://api.nomoreparties.co${ movie.image.url }` : movie.image } alt={ movie.nameRU }/>
      </a>
      <div className='movies__block'>
        <h4 className='movies__title'>{ movie.nameRU }</h4>
        <button type='button' className='movies__like'
                onClick={ () => { location.pathname === '/movies'
                  ? handleSaveMovie(movie)
                  : handleDeleteMovie(movie) } }>
          { actionButton() }
        </button>
      </div>
      <div className='movies__border'></div>
      <p className='movies__time'>{ Math.trunc(movie.duration / 60) }ч { movie.duration % 60 }м</p>
    </StyledMoviesCard>
  )
}

export default MoviesCard

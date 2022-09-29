import StyledMoviesCard from './MoviesCard.styled'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const MoviesCard = () => {
  const [like, setLike] = useState(true)
  const location = useLocation()

  const handleLike = () => {
    setLike(!like)
  }

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
        <img className='movies__img' src='/images/film.png' alt='фильм'/>
        <div className='movies__block'>
          <h4 className='movies__title'>33 слова о дизайне</h4>
          <button type='button' className='movies__like' onClick={ handleLike }>
            { actionButton() }
          </button>
        </div>
        <div className='movies__border'></div>
        <p className='movies__time'>1ч 42м</p>
    </StyledMoviesCard>
  )
}

export default MoviesCard

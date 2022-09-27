import StyledMoviesCardList from './MoviesCardList.styled'
import MoviesCard from './MoviesCard/MoviesCard'

const MoviesCardList = ({ number }) => {
  return (
    <StyledMoviesCardList>
      <section className='movies'>
        <ul className='movies__list'>
          { [...Array(number)].map((e, i) => <MoviesCard key={ i }/>) }
        </ul>
        <button type='button' className='movies__btn'>Ещё</button>
      </section>
    </StyledMoviesCardList>
  )
}

export default MoviesCardList
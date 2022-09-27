import { StyledContainer } from '../GlobalStyled/Global.styled'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'

const Movies = () => {
  const number = 16
  return (
    <StyledContainer>
        <SearchForm/>
        <MoviesCardList number={number}/>
    </StyledContainer>
  )
}

export default Movies
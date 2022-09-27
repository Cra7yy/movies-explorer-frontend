import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import { StyledContainer } from '../GlobalStyled/Global.styled'

const SaveMovies = () => {
  const number = 3

  return (
    <StyledContainer>
      <SearchForm/>
      <MoviesCardList number={number}/>
    </StyledContainer>
  )
}

export default SaveMovies
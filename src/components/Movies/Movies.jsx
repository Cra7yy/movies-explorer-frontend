import { StyledContainer } from '../GlobalStyled/Global.styled'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { useState } from 'react'

const Movies = ({
                  handleSaveMovie,
                  saveMovies,
                  handleDeleteMovie,
                  movieCards,
                  durationSwitch,
                  handleSearch,
                  isMoviesError,
                  preloader
                }) => {

  const [errorInput, setErrorInput] = useState(false)

  const handleInputError = () => {
    setErrorInput(true)
  }

  const deleteInputError = () => {
    setErrorInput(false)
  }

  return (
    <StyledContainer>
      <SearchForm
        durationSwitch={ durationSwitch }
        handleSearch={ handleSearch }
        handleInputError={ handleInputError }
        deleteInputError={deleteInputError}
      />
      <InfoTooltip
        err={ false }
      />
      <MoviesCardList
        errorInput={ errorInput }
        preloader={ preloader }
        isMoviesError={ isMoviesError }
        movieCards={ movieCards }
        handleSaveMovie={ handleSaveMovie }
        saveMovies={ saveMovies }
        handleDeleteMovie={ handleDeleteMovie }
      />
    </StyledContainer>
  )
}

export default Movies
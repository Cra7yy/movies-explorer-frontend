import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import { StyledContainer } from '../GlobalStyled/Global.styled'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { useState } from 'react'

const SaveMovies = ({ saveMovies,
                      handleSaveMovie,
                      handleDeleteMovie,
                      movieCards,
                      handleSearch,
                      savedDurationSwitch
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
        durationSwitch={ savedDurationSwitch }
        handleSearch={ handleSearch }
        handleInputError={ handleInputError }
        deleteInputError={deleteInputError}
      />
      <InfoTooltip
        err={ false }
      />
      <MoviesCardList
        errorInput={ errorInput }
        saveMovies={ saveMovies }
        handleSaveMovie={ handleSaveMovie }
        handleDeleteMovie={ handleDeleteMovie }
        movieCards={ movieCards }
      />
    </StyledContainer>
  )
}

export default SaveMovies
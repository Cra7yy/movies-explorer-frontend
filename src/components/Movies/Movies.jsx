import { StyledContainer } from '../GlobalStyled/Global.styled'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { useState } from 'react'

const Movies = ({ handleSaveMovie,
                  saveMovies,
                  handleDeleteMovie,
                  movieCards,
                  durationSwitch,
                  handleSearch,
                  isMoviesError,
                  preloader
}) => {

  const [text, setText] = useState()
  const [openPopup,setOpenPopup] = useState(false)

  const handleOpenPopup = () =>{
    setOpenPopup(true)
  }

  const handleClosePopup = () => {
    setOpenPopup(false)
  }

  return (
    <StyledContainer>
      <SearchForm
        durationSwitch={ durationSwitch }
        handleSearch={ handleSearch }
        setText={setText}
        handleOpenPopup={handleOpenPopup}
      />
      <InfoTooltip
        text={ text }
        err={ false }
        onClose={ handleClosePopup }
        isOpen={ openPopup }
      />
      <MoviesCardList
        preloader={preloader}
        isMoviesError={isMoviesError}
        movieCards={ movieCards }
        handleSaveMovie={ handleSaveMovie }
        saveMovies={ saveMovies }
        handleDeleteMovie={ handleDeleteMovie }
      />
    </StyledContainer>
  )
}

export default Movies
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
        durationSwitch={ savedDurationSwitch }
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
        saveMovies={ saveMovies }
        handleSaveMovie={ handleSaveMovie }
        handleDeleteMovie={ handleDeleteMovie }
        movieCards={ movieCards }
      />
    </StyledContainer>
  )
}

export default SaveMovies
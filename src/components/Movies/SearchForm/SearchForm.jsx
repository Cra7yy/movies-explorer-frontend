import FilterCheckbox from './FiterCheckbox/FilterCheckbox'
import StyledSearchForm from './SearchForm.styled'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchForm = ({ handleSearch,
                      durationSwitch,
                      setText,
                      handleOpenPopup
}) => {

  const localStorageValue = localStorage.getItem('saveSearchValue')
  const location = useLocation()
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState(localStorageValue ?? '')

  const changeCheckbox = () => {
    setChecked(!checked)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    setChecked(false)
    handleSearch(value)
  }

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setChecked(false)
      handleSearch(value)
      setValue('')
    }
  }, [location])

  useEffect(() => {
    if (location.pathname === '/movies') {
      localStorage.setItem('saveSearchValue', value)
      localStorage.setItem('saveCheck', checked)
    }
  }, [value, checked])


  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      durationSwitch(checked)
    }
    if (location.pathname === '/movies') {
      handleSearch(localStorageValue)
      durationSwitch(checked)
    }
  }, [location, checked])

  const changeInput = (event) => {
    setValue(event.target.value)
  }

  const click = () => {
    if (value === '') {
      setText('нужновести ввести ключевое слово')
      handleOpenPopup()
    }
  }

  return (
    <StyledSearchForm className='search'>
      <form className='search__form' onSubmit={ handleSubmitForm }>
        <div className='search__form-block'>
          <fieldset className='search__form-fieldset'>
            <input type='text'
                   name='text'
                   placeholder='Фильм'
                   value={ value }
                   onChange={ changeInput }
                   className='search__form-input'
                   autoComplete='off'
                   required
            />
          </fieldset>
          <button className='search__form-button' type='submit' onClick={ click }>
            <img src='/images/search.svg' alt='Поиск' className='search__form-icon'/>
          </button>
        </div>
        <div className='search__form-border'/>

        <FilterCheckbox
          changeCheckbox={ changeCheckbox }
          checked={ checked }
        />

      </form>
    </StyledSearchForm>
  )
}

export default SearchForm
import FilterCheckbox from './FiterCheckbox/FilterCheckbox'
import StyledSearchForm from './SearchForm.styled'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchForm = ({ handleSearch,
                      durationSwitch,
                      handleInputError,
                      deleteInputError
}) => {

  const location = useLocation()
  const localStorageValue = location.pathname === '/movies'
    ? localStorage.getItem('SearchValue')
    : ''

  const check = location.pathname === '/movies' ? JSON.parse(localStorage.getItem('check')) : false
  const [checked, setChecked] = useState(check)
  const [value, setValue] = useState(localStorageValue ?? '')

  const changeCheckbox = () => {
    setChecked(!checked)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    if(value === ''){
      handleInputError()
      localStorage.removeItem('filtered')
    }else{
      deleteInputError()
      handleSearch(value)
    }
  }

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setChecked(false)
      handleSearch(value)
    }
  }, [location])

  useEffect(() => {
    if (location.pathname === '/movies') {
      localStorage.setItem('SearchValue', value)
      localStorage.setItem('check', checked)
    }else if(location.pathname === '/saved-movies'){
      localStorage.setItem('searchSaveValue', value)
      localStorage.setItem('saveCheck', checked)
    }
  }, [value, checked])


  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      handleSearch(localStorageValue)
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
          <button className='search__form-button' type='submit'  formNoValidate>
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
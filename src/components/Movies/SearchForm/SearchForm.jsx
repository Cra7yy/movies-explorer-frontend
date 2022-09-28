import FilterCheckbox from './FiterCheckbox/FilterCheckbox'
import StyledSearchForm from './SearchForm.styled'

const SearchForm = () => {
  return (
    <StyledSearchForm className='search'>
        <form className='search__form'>
          <div className='search__form-block'>
            <fieldset className='search__form-fieldset'>
              <input type='text' placeholder='Фильм' className='search__form-input' required/>
            </fieldset>
            <button className='search__form-button' type='submit'>
              <img src='/images/search.svg' alt='Поиск' className='search__form-icon'/>
            </button>
          </div>
          <div className='search__form-border'/>

          <FilterCheckbox/>

        </form>
    </StyledSearchForm>
  )
}

export default SearchForm
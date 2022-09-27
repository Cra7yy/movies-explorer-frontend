import StyledFilterCheckbox from './FilterCheckbox.styled'

const FilterCheckbox = () => {
  return (
    <StyledFilterCheckbox>
      <div className='filter__block'>
        <p className='filter__text filter__text-mini'>Короткометражки</p>
          <input className='filter__checkbox' type='checkbox' id='checkbox'/>
          <label className='filter__label' htmlFor='checkbox'></label>
        <p className='filter__text filter__text-max'>Короткометражки</p>
      </div>
    </StyledFilterCheckbox>
  )
}

export default FilterCheckbox
import StyledFilterCheckbox from './FilterCheckbox.styled'

const FilterCheckbox = ({ checked,
                          changeCheckbox
}) => {

  return (
    <StyledFilterCheckbox className='filter'>
      <p className='filter__text filter__text-mini'>Короткометражки</p>
      <input className='filter__checkbox' type='checkbox' id='checkbox' checked={ checked }
             onChange={ changeCheckbox }/>
      <label className='filter__label' htmlFor='checkbox'></label>
      <p className='filter__text filter__text-max'>Короткометражки</p>
    </StyledFilterCheckbox>
  )
}

export default FilterCheckbox
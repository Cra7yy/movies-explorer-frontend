import StyledProfile from './Profile.styled'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import CurrentUserContext from '../../context/CurrentUserContext'
import { useFormWithValidation } from '../../hook/useFormWithValidation'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

const Profile = ({
                   signOut,
                   handleProfile,
                   errorProfileMessage,
                   profileMessage,
                   setProfileMessage,
                   setErrorProfileMessage,
                   isOpen,
                   onClose
                 }) => {

  const currentUser = useContext(CurrentUserContext)
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation()
  const [buttonClick, setButtonClick] = useState(false)

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true)
    }
  }, [currentUser, resetForm])

  useEffect(() => {
    if ((values.name !== currentUser.name || values.email !== currentUser.email) && isValid) {
      setButtonClick(true)
    } else {
      setButtonClick(false)
    }
  }, [values, isValid])

  setTimeout(() => {
    setProfileMessage(false)
    setErrorProfileMessage(false)
  }, 30000)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleProfile(values)
  }

  return (
    <StyledProfile>
      <InfoTooltip
        isOpen={ isOpen }
        onClose={ onClose }
      />
      <div className='profile'>
        <h2 className='profile__title'>Привет, { currentUser.name }</h2>
        <form className='profile__form' onSubmit={ handleSubmit }>
          <fieldset className='profile__fieldset'>
            <div className='profile__block'>
              <p className='profile__text'>Имя</p>
              <input
                name='name'
                defaultValue={ currentUser.name }
                type='text'
                className='profile__input'
                onChange={ handleChange }
                pattern='^[A-Za-zА-Яа-яЁё0-9 /s -]+$'
              />
            </div>
            <span className='profile__err'>{ errors.name }</span>
            <div className='profile__border'></div>
            <div className='profile__block'>
              <p className='profile__text'>E-mail</p>
              <input
                name='email'
                defaultValue={ currentUser.email }
                type='email'
                className='profile__input'
                onChange={ handleChange }
              />
            </div>
            <span className='profile__err'>{ errors.email }</span>
            { buttonClick && errorProfileMessage &&
              <span className='profile__err'>Не удолось изменить даные профиля</span> }
            {/*{ buttonClick && profileMessage && <span className='profile__active'>данные успешно изменены</span> }*/}
          </fieldset>
          <button disabled={ !buttonClick } type='submit' formNoValidate
                  className={ buttonClick ? 'profile__redact' : 'profile__disablet' }>Редактировать
          </button>
        </form>
        <Link to='/' className='profile__link' onClick={ signOut }>Выйти из аккаунта</Link>
      </div>
    </StyledProfile>
  )
}

export default Profile
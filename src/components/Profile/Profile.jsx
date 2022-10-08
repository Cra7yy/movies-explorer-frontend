import StyledProfile from './Profile.styled'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import CurrentUserContext from '../../context/CurrentUserContext'
import { useFormWithValidation } from '../../hook/useFormWithValidation'

const Profile = ({ signOut,
                   handleProfile,
                   errorProfileMessage
}) => {

  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
  const currentUser = useContext(CurrentUserContext)
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation()

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true)
    }
  }, [currentUser, resetForm])

  useEffect(() => {
    setDisplayErrorMessage(false)
  }, [values])

  const handleSubmit = (event) => {
    event.preventDefault()
    handleProfile(values)
  }

  return (
    <StyledProfile>
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
            <span className='profile__err'>{ errors.name || '' }</span>
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
            { displayErrorMessage && <span className='profile__err'>{ errorProfileMessage }</span> }
          </fieldset>
          <button type='submit' className='profile__redact'>Редактировать</button>
        </form>
        <Link to='/' className='profile__link' onClick={ signOut }>Выйти из аккаунта</Link>
      </div>
    </StyledProfile>
  )
}

export default Profile
import StyledProfile from './Profile.styled'
import { Link } from 'react-router-dom'

const Profile = ({ handleCloseLogin }) => {
  return (
      <StyledProfile>
        <div className='profile'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <form className='profile__form'>
            <fieldset className='profile__fieldset'>
              <div className='profile__block'>
                <p className='profile__text'>Имя</p>
                <input placeholder='Виталий' type='text' className='profile__input'/>
              </div>
              <div className='profile__border'></div>
              <div className='profile__block'>
                <p className='profile__text'>E-mail</p>
                <input placeholder='pochta@yandex.ru' type='email' className='profile__input'/>
              </div>
            </fieldset>
            <p className='profile__redact'>Редактировать</p>
          </form>
          <Link to='/signup' className='profile__link' onClick={ handleCloseLogin }>Выйти из аккаунта</Link>
        </div>
      </StyledProfile>
  )
}

export default Profile
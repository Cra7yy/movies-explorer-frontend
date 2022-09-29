import StyledRegister from './Register.styled'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/signin', { replace: true })
  }

  return (
        <StyledRegister>
        <div className='register'>
          <Logo/>
          <h2 className='register__title'>Добро пожаловать!</h2>
          <form className='register__form'>
            <fieldset className='register__fieldset'>
              <p className='register__text'>Имя</p>
              <input type='text' className='register__input'/>
              <span className='register__err'></span>
              <p className='register__text'>E-mail</p>
              <input type='email' className='register__input'/>
              <span className='register__err'></span>
              <p className='register__text'>Пароль</p>
              <input type='password' className='register__input register__input-password'/>
              <span className='register__err'>Что-то пошло не так...</span>
            </fieldset>
            <button onClick={handleSubmit} type='submit' className='register__submit'>Зарегистрироваться</button>
          </form>
          <p className='register__subtitle'>Уже зарегистрированы?
            <Link className='register__link' to='/signin'> Войти</Link>
          </p>
        </div>
        </StyledRegister>
  )
}

export default Register
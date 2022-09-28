import StyledLogin from './Login.styled'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Login = ({ clickOpenLogin }) => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    clickOpenLogin()
    navigate('/', { replace: true })
  }

  return (
      <StyledLogin>
        <div className='login'>
          <Logo/>
          <h2 className='login__title'>Рады видеть!</h2>
          <form className='login__form'>
            <fieldset className='login__fieldset'>
              <p className='login__text'>E-mail</p>
              <input type='text' className='login__input'/>
              <p className='login__text'>Пароль</p>
              <input type='password' className='login__input'/>
            </fieldset>
            <button type='submit' onClick={ handleSubmit } className='login__submit' type='submit'>Войти</button>
          </form>
          <p className='login__subtitle'>Ещё не зарегистрированы?
            <Link className='login__link' to='/signup'> Регистрация</Link>
          </p>
        </div>
      </StyledLogin>
  )
}

export default Login
import StyledLogin from './Login.styled'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import { useFormWithValidation } from '../../hook/useFormWithValidation'

const Login = ({ handleLogin, errorLoginMessage }) => {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation()
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(values)
    setDisplayErrorMessage(true)
  }

  useEffect(() => {
    setDisplayErrorMessage(false)
  }, [values])

  useEffect(() => {
    resetForm()
  }, [resetForm])

  return (
    <StyledLogin>
      <div className='login'>
        <Logo/>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form' onSubmit={ handleSubmit }>
          <fieldset className='login__fieldset'>
            <p className='login__text'>E-mail</p>
            <input
              type='email'
              className='login__input'
              name='email'
              value={ values.email }
              required
              minLength='5'
              onChange={ handleChange }/>
            <span className='login__err'>{ errors.email }</span>
            <p className='login__text'>Пароль</p>
            <input
              type='password'
              className='login__input login__input-password'
              name='password'
              value={ values.password }
              minLength='3'
              required
              onChange={ handleChange }/>
            <span className='login__err'>{ errors.password }</span>
            { displayErrorMessage && <span className='login__err'>{ errorLoginMessage }</span> }
          </fieldset>

          <button
            type='submit'
            className={ isValid ? 'login__submit' : 'login__submit_disabled' }
            disabled={ !isValid }>
            Войти
          </button>
        </form>
        <p className='login__subtitle'>Ещё не зарегистрированы?
          <Link className='login__link' to='/signup'> Регистрация</Link>
        </p>
      </div>
    </StyledLogin>
  )
}

export default Login
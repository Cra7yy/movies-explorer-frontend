import StyledRegister from './Register.styled'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { useFormWithValidation } from '../../hook/useFormWithValidation'

const Register = ({ handleRegister, errorRegisterMessage }) => {
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation()

  const handleSubmit = (event) => {
    event.preventDefault()
    handleRegister(values)
  }

  useEffect(() => {
    setDisplayErrorMessage(false)
  }, [values])

  useEffect(() => {
    resetForm()
  }, [resetForm])

  return (
    <StyledRegister>
      <div className='register'>
        <Logo/>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' onSubmit={ handleSubmit }>
          <fieldset className='register__fieldset'>
            <p className='register__text'>Имя</p>
            <input
              type='text'
              className='register__input'
              name='name'
              value={ values.name }
              pattern='^[A-Za-zА-Яа-яЁё0-9 /s -]+$'
              required
              onChange={ handleChange }/>
            <span className='register__err'>{ errors.name }</span>
            <p className='register__text'>E-mail</p>
            <input
              type='email'
              className='register__input'
              name='email'
              minLength='5'
              value={ values.email }
              required
              onChange={ handleChange }/>
            <span className='register__err'>{ errors.email }</span>
            <p className='register__text'>Пароль</p>
            <input
              type='password'
              className='register__input register__input-password'
              value={ values.password }
              required
              minLength='3'
              name='password'
              onChange={ handleChange }/>
            <span className='register__err'>{ errors.password }</span>
            { displayErrorMessage && <span className='register__err'>{ errorRegisterMessage }</span> }
          </fieldset>
          <button type='submit'
                  className={ isValid ? 'register__submit' : 'register__submit_disabled' }
                  disabled={ !isValid }>
            Зарегистрироваться
          </button>
        </form>
        <p className='register__subtitle'>Уже зарегистрированы?
          <Link className='register__link' to='/signin'> Войти</Link>
        </p>
      </div>
    </StyledRegister>
  )
}

export default Register
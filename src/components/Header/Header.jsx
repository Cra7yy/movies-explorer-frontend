import { Link, useLocation } from 'react-router-dom'
import StyledHeader from './Header.styled'
import { StyledContainer } from '../GlobalStyled/Global.styled'
import Logo from '../Logo/Logo'
import { useState } from 'react'

const Header = ({ isLogin }) => {
  const location = useLocation()
  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleBurgerClick = () => {
    setIsMenuShown(!isMenuShown)
  }

  return (
    <StyledHeader>
      <div className={ location.pathname === '/' ? 'background__color' : '' }>
        <StyledContainer>

          <div className='header'>
            <Logo/>
            <div className={ isLogin ? 'none' : 'navigation' }>
              <Link className='navigation__link' to='/signup'>Регистрация</Link>
              <Link className='navigation__btn' to='/signin'>Войти</Link>
            </div>

            <div className={ isLogin ? 'navigation-movies' : 'none' }>
              <Link className='navigation-movies__link' to='/movies'>Фильмы</Link>
              <Link className='navigation-movies__link' to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <div className={ isLogin ? 'navigation-account' : 'none' }>
              <Link className='navigation-account__link' to='/profile'>Аккаунт</Link>
              <div className='navigation-account__image'>
                <img src='/images/account.svg' alt='акаунт' className='navigation-account__img'/>
              </div>
            </div>

            <div className={ isLogin ? 'navigation-burger' : 'none' }>
              <button className='navigation-burger__button'
                      onClick={ handleBurgerClick }></button>
              <div className={ `navigation-burger__menu ${ isMenuShown && 'active' }` }>
                <button className='navigation-burger__button-close' onClick={ handleBurgerClick }></button>
                <nav className={ `navigation-burger__block ${ isMenuShown && 'active' }` }>
                  <ul className='navigation-burger__list'>
                    <div className='navigation-burger__flex'>
                    <li
                      className={ `navigation-burger__link ${ location.pathname === '/' && 'navigation-burger__link_active' } ` }>
                      <Link to='/'>Главная</Link>
                    </li>
                    <li
                      className={ `navigation-burger__link ${ location.pathname === '/movies' && 'navigation-burger__link_active' } ` }>
                      <Link to='/movies'>Фильмы</Link>
                    </li>
                    <li
                      className={ `navigation-burger__link ${ location.pathname === '/saved-movies' && 'navigation-burger__link_active' } ` }>
                      <Link to='/saved-movies'>Сохранённые фильмы</Link>
                    </li>
                    </div>
                    <li
                      className={ `navigation-burger__link-account navigation-burger__link ${ location.pathname === '/profile' && 'navigation-burger__link_active' } ` }>
                        <Link className='navigation-account__link' to='/profile'>Аккаунт</Link>
                        <div className='navigation-account__image'>
                          <img src='/images/account.svg' alt='акаунт' className='navigation-account__img'/>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>


          </div>

        </StyledContainer>
      </div>
    </StyledHeader>
  )
}

export default Header
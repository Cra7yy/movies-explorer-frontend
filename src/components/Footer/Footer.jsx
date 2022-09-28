import StyledFooter from './Footer.styled'
import { StyledContainer } from '../GlobalStyled/Global.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className='footer'>
          <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
          <div className='footer__block'>
            <p className='footer__year'>&copy; 2022</p>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'
                   className='footer__link'>Яндекс.Практикум</a>
              </li>
              <li className='footer__item'>
                <a href='https://github.com/Cra7yy' target='_blank' rel='noreferrer'
                   className='footer__link'>Github</a>
              </li>
            </ul>
          </div>
        </div>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
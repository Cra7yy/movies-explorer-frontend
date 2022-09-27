import StyledPortfolio from './Portfolio.styled'
import { StyledContainer } from '../../GlobalStyled/Global.styled'

const Portfolio = () => {
  return (

    <StyledPortfolio>
        <StyledContainer>

          <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__list'>
              <li className='portfolio__item'>
                <a href='https://cra7yy.github.io/how-to-learn/' target='_blank' rel='noreferrer'
                   className='portfolio__link'>Статичный сайт</a>
              </li>
              <li className='portfolio__item'>
                <a href='https://cra7yy.github.io/russian-travel/' target='_blank' rel='noreferrer'
                   className='portfolio__link'>Адаптивный сайт</a>
              </li>
              <li className='portfolio__item'>
                <a href='https://mesto.cra7y.nomoredomains.xyz/' target='_blank' rel='noreferrer'
                   className='portfolio__link'>Одностраничное приложение</a>
              </li>
            </ul>
          </section>

        </StyledContainer>
    </StyledPortfolio>
  )
}

export default Portfolio
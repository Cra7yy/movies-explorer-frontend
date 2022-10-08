import StyledPromo from './Promo.styled'
import { StyledContainer, StyledColorBlue } from '../../GlobalStyled/Global.styled'

const Promo = () => {
  return (
    <StyledColorBlue>
      <StyledContainer>
        <StyledPromo className='promo'>
          <div className='promo__block'>
            <div className='promo__texts'>
              <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
              <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
              <a href='#aboutProject'>
                <button type='button' className='promo__btn'>Узнать больше</button>
              </a>
            </div>
            <img src='/images/planet.png' alt='планета' className='promo__img'/>
          </div>
        </StyledPromo>
      </StyledContainer>
    </StyledColorBlue>
  )
}

export default Promo
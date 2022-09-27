import StyledPromo from './Promo.styled'
import {StyledContainer,StyledColorBlue} from '../../GlobalStyled/Global.styled'

const Promo = () => {
  return (
    <StyledPromo>
      <StyledColorBlue>
        <StyledContainer>

          <section className='promo'>
            <div className='promo__block'>
              <div className='promo__texts'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button type='button' className='promo__btn'><a href='#aboutProject'>Узнать больше</a></button>
              </div>
              <img src='/images/planet.png' alt='планета' className='promo__img'/>
            </div>
          </section>

        </StyledContainer>
      </StyledColorBlue>
    </StyledPromo>
  )
}

export default Promo
import StyledAboutMe from './AboutMe.styled'
import { StyledContainer } from '../../GlobalStyled/Global.styled'

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <StyledContainer>
        <div className='about-me'>
          <h2 className='about-me__title'>Студент</h2>
          <div className='about-me__block'>
            <div className='about-me__texts'>
              <h3 className='about-me__subject'>Илья</h3>
              <p className='about-me__subtitle'>Фронтенд-разработчик, 34 года</p>
              <p className='about-me__text'>Я родился в городе Сегежа, закончил
                Северный Колледж по специальности электромонтер по ремонту и обслуживанию электрооборудования.
                Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                После того, как прошёл курс по веб-разработке, я постоянно изучаю что ни будь новое!</p>
              <div className='about-me__links'>
                <a href='https://github.com/Cra7yy' target='_blank' rel='noreferrer'
                   className='about-me__link'>Github</a>
                <a href='https://t.me/Cra7y' target='_blank' rel='noreferrer' className='about-me__link'>Telegram</a>
              </div>
            </div>
            <img src='/images/Ilya.jpg' alt='я' className='about-me__img'/>
          </div>
        </div>
      </StyledContainer>
    </StyledAboutMe>
  )
}

export default AboutMe
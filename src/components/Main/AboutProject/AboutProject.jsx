import StyledAboutProject from './AboutProject.styled'
import { StyledContainer } from '../../GlobalStyled/Global.styled'

const AboutProject = () => {
  return (
    <StyledAboutProject>
      <StyledContainer>
        <div className='about-project'>
        <a href='aboutProject' name='aboutProject'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__block-text'>
          <div className='about-project__texts'>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__texts'>
            <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__progress-bar'>
          <div className='about-project__progress about-project__progress-backend'>
            <p className='about-project__progress-text about-project__color'>1 неделя</p>
            <h3 className='about-project__progress-title'>Back-end</h3>
          </div>
          <div className='about-project__progress about-project__progress-frontend'>
            <p className='about-project__progress-text'>4 недели</p>
            <h3 className='about-project__progress-title'>Front-end</h3>
          </div>
        </div>
        </a>
        </div>
      </StyledContainer>
    </StyledAboutProject>
  )
}

export default AboutProject
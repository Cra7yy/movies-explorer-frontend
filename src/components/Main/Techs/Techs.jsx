import StyledTechs from './Techs.styled'
import { StyledContainer } from '../../GlobalStyled/Global.styled'

const Techs = () => {
  return (
    <StyledTechs lassName='techs'>
      <StyledContainer>
        <div className='techs'>
          <h2 className='techs__title'>Технологии</h2>
          <div className='techs__block'>
            <h3 className='techs__subject'>7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном
              проекте.</p>
            <ul className='techs__list'>
              <li className='techs__item'>HTML</li>
              <li className='techs__item'>CSS</li>
              <li className='techs__item'>JS</li>
              <li className='techs__item'>React</li>
              <li className='techs__item'>Git</li>
              <li className='techs__item'>Express.js</li>
              <li className='techs__item'>mongoDB</li>
            </ul>
          </div>
        </div>
      </StyledContainer>
    </StyledTechs>
  )
}

export default Techs
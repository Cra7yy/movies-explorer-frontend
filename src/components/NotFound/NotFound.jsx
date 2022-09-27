import StyledNotFound from './NotFound.styled'
import { Link, useNavigate } from 'react-router-dom'
import { StyledContainer } from '../GlobalStyled/Global.styled'

const NotFound = () => {
  const navigate = useNavigate()

  const toBack = () => {
    navigate(-1)
  }

  return (
    <StyledContainer>
      <StyledNotFound>
        <section className='not-found'>
          <h2 className='not-found__title'>404</h2>
          <p className='not-found__text'>Страница не найдена</p>
          <Link onClick={ toBack } className='not-found__back'>Назад</Link>
        </section>
      </StyledNotFound>
    </StyledContainer>
  )
}

export default NotFound
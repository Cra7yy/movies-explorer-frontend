import StyledNotFound from './NotFound.styled'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const toBack = () => {
    navigate(-1)
  }

  return (
      <StyledNotFound className='not-found'>
          <h2 className='not-found__title'>404</h2>
          <p className='not-found__text'>Страница не найдена</p>
          <Link onClick={ toBack } className='not-found__back'>Назад</Link>
      </StyledNotFound>
  )
}

export default NotFound
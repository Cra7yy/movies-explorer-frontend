import { Link, useLocation } from 'react-router-dom'

const Logo = () => {
  const location = useLocation()

  return (
    <Link to={ (location.pathname === '/signin' || '/signup') && '' }>
      <img className='logo__img' src='/images/logo.svg' alt='логотип'/>
    </Link>
  )
}

export default Logo
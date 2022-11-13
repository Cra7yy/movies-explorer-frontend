import { Link } from 'react-router-dom'

const Logo = () => {

  return (
    <Link to='/'>
      <img className='logo__img' src='/images/logo.svg' alt='логотип'/>
    </Link>
  )
}

export default Logo
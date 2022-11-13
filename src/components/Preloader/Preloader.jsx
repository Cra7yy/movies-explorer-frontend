import StyledPreloader from './Preloader.styled'

const Preloader = ({ preloader }) => {

  return (
    <StyledPreloader>
      <div className={preloader ? 'preloader' : 'none' }>
        <div className={preloader ? 'preloader__container' : 'none' }>
          <span className='preloader__round'></span>
        </div>
      </div>
    </StyledPreloader>
  )
}

export default Preloader

import { StyledInfoTooltip } from './InfoTooltip.styled'

const InfoTooltip = ({ isOpen, onClose, err, text }) => {

  return (
    <StyledInfoTooltip>
      <div className={ `popup ${ isOpen && 'popup_opened' }` }>
        <div className='popup__registration'>
          <button type='button' className='popup__cross' onClick={ onClose }></button>
          <img src={ err ? '/images/true.svg' : '/images/default.svg' } alt='картинка' className='popup__img'/>
          <p className='popup__text'>{ text }</p>
        </div>
      </div>
    </StyledInfoTooltip>
  )
}

export default InfoTooltip
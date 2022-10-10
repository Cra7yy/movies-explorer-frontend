import { StyledInfoTooltip } from './InfoTooltip.styled'

const InfoTooltip = ({ isOpen, onClose }) => {

  return (
    <StyledInfoTooltip>
      <div className={ `popup ${ isOpen && 'popup_opened' }` }>
        <div className='popup__registration'>
          <button type='button' className='popup__cross' onClick={ onClose }></button>
          <img src='/images/true.svg' alt='картинка' className='popup__img'/>
          <p className='popup__text'>данные успешно изменены</p>
        </div>
      </div>
    </StyledInfoTooltip>
  )
}

export default InfoTooltip
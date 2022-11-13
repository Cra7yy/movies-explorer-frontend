import styled from 'styled-components'

export const StyledInfoTooltip = styled.div`
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: visibility 0.5s, opacity 0.5s linear;
  }

  .popup__registration {
    width: 430px;
    height: 330px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    position: relative;
  }

  .popup__img {
    width: 120px;
    height: 120px;
    margin-top: 60px;
  }

  .popup__text {
    margin-top: 32px;
    max-width: 358px;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    text-align: center;
  }

  .popup__cross {
    width: 32px;
    height: 32px;
    position: absolute;
    right: -42px;
    top: -45px;
    cursor: pointer;
    background-image: url("/images/cross.svg");
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: cover;
    border: none;
  }

  .popup__cross:hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }

  @media screen and (max-width: 645px) {
    .popup__cross {
      width: 20px;
      height: 20px;
      right: 0;
      top: -37px;
    }
  }

  .popup_opened {
    opacity: 1;
    visibility: visible;
  }

`
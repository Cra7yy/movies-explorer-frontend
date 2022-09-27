import styled from 'styled-components'

const StyledHeader = styled.div`
  .background__color {
    background-color: #073042;
  }

  .header {
    height: 76px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation {
    display: flex;
    gap: 30px;

    &__link {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity .3s;
    }

    &__link:hover {
      opacity: .6;
    }

    &__btn {
      width: 76px;
      height: 32px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3DDC84;
      border-radius: 3px;
      color: #000000;
      transition: transform .15s;
    }

    &__btn:hover {
      transform: scale(1.015);
    }

    &__btn:active {
      transform: scale(0.95);
    }
  }

  .navigation-movies {
    display: flex;
    gap: 16px;

    &__link {
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      transition: opacity .3s;
    }

    &__link:hover {
      opacity: .6;
    }
  }

  .navigation-account {
    display: flex;
    align-items: center;
    gap: 7px;

    &__link {
      font-weight: 500;
      font-size: 13px;
      line-height: 12px;
      transition: opacity .3s;
    }

    &__link:hover {
      opacity: .6;
    }

    &__image {
      width: 26px;
      height: 26px;
      background-color: #313131;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__img {
    }
  }

  .navigation-burger {
    display: none;

    &__button {
      background: url('/images/burger.svg') center no-repeat;
      height: 44px;
      width: 44px;
    }

    &__menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: flex-end;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.4s ease-in-out, opacity 0.4s ease-in-out;
      z-index: 1;
    }

    &__button-close {
      position: absolute;
      background: url('/images/burger-cross.svg') center no-repeat;
      height: 22px;
      width: 22px;
      top: 22px;
      right: 22px;
      z-index: 1;
    }

    &__block {
      background-color: #202020;
      width: 60%;
      height: 100%;
      position: relative;
      z-index: 0;
      transform: translateX(100%);
      transition: transform 0.2s ease-in;
    }

    &__list {
      padding-top: 159px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
    
    &__flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 28px;
    }

    &__link {
      padding-bottom: 4px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      transition: opacity .3s;
    }

    &__link-account {
      padding-bottom: 4px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      transition: opacity .3s;
      display: flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 90px;
    }

    &__link:hover {
      opacity: .6;
    }

    &__link_active {
      border-bottom: 2px solid #FFFFFF;
    }
  }

  .none {
    display: none;
  }

  .active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 769px) {
    .navigation-burger {
      display: block;
    }

    .navigation-movies {
      display: none;
    }

    .navigation-account {
      display: none;
      flex-direction: column;
      
      &__link {
        padding-bottom: 4px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        transition: opacity .3s;
      }

      &__link:hover {
        opacity: .6;
      }
    }
  }


  @media (max-width: 480px) {
    .header {
      height: 74px;
    }

    .navigation {
      gap: 14px;

      &__link {
        font-size: 10px;
      }

      &__btn {
        width: 54px;
        height: 26px;
        font-size: 10px;
        line-height: 16px;
      }
    }

    .navigation-burger {
      &__block {
        width: 1000%;
      }

      &__list {
        padding-top: 144px;
      }
      &__link-account {
        margin-bottom: 46px;
      }
    }
  }
`

export default StyledHeader
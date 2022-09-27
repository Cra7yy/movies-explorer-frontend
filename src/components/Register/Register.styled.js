import styled from 'styled-components'

const StyledRegister = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .register {
    max-width: 396px;

    &__img {
    }

    &__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin: 40px 0 30px;
    }

    &__form {
    }

    &__fieldset {
    }

    &__text {
      font-size: 10px;
      line-height: 12px;
      color: #8B8B8B;
      margin: 10px 0;
    }

    &__input {
      width: 100%;
      height: 46px;
      background-color: #2F2F2F;
      margin-bottom: 10px;
      border-radius: 8px;
      padding: 0 15px;
      font-size: 13px;
      line-height: 16px;
    }

    &__input-password {
      color: #EE3465;
    }

    &__err {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #EE3465;
    }

    &__submit {
      width: 100%;
      height: 45px;
      background-color: #4285F4;
      margin: 69px 0 16px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      border-radius: 3px;
      transition: transform .25s;
    }

    &__submit:hover {
      transform: scale(1.015);
    }

    &__submit:active {
      transform: scale(0.98);
    }

    &__subtitle {
      font-size: 14px;
      line-height: 17px;
      color: #8B8B8B;
      text-align: center;
    }

    &__link {
      font-size: 14px;
      line-height: 17px;
      color: #4285F4;
      transition: opacity .3s;
    }

    &__link:hover {
      opacity: .6;
    }
  }

  @media (max-width: 480px) {
    .register {
      max-width: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        margin: 50px 0 70px;
      }

      &__submit {
        margin: 157px 0 14px;
        font-size: 12px;
        line-height: 15px;
      }

      &__subtitle {
        font-size: 12px;
        line-height: 15px;
      }

      &__link {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
`

export default StyledRegister
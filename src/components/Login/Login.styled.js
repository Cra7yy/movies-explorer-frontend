import styled from 'styled-components'

const StyledLogin = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .login {
    width: 396px;

    &__img {
    }

    &__err {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #EE3465;
    }

    &__input-password {
      color: #EE3465;
    }

    &__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin: 40px 0 20px;
    }

    &__form {
    }

    &__fieldset {
    }

    &__text {
      font-size: 10px;
      line-height: 12px;
      color: #8B8B8B;
      margin: 20px 0 10px;
    }

    &__input {
      background-color: #2F2F2F;
      border-radius: 8px;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      height: 46px;
      width: 100%;
      padding: 0 15px;
    }

    &__submit {
      margin: 179px 0 16px;
      background-color: #4285F4;
      border-radius: 3px;
      height: 45px;
      width: 100%;
      transition: transform .25s;
    }

    &__submit_disabled {
      margin: 179px 0 16px;
      background-color: #F8F8F8;
      color: #C2C2C2;
      border-radius: 3px;
      height: 45px;
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
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

  @media(max-width: 480px){
    .login {
      width: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        margin: 50px 0 60px;
      }
      
      &__fieldset {
        width: 260px;
      }

      &__submit {
        margin: 267px 0 14px;
      }

      &__submit_disabled {
        margin: 267px 0 14px;
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

export default StyledLogin
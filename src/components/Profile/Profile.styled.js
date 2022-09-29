import styled from 'styled-components'

const StyledProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 76px);

  .profile {
    width: 410px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 123px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__fieldset {
    }

    &__block {
      width: 410px;
      display: flex;
      justify-content: space-between;
    }

    &__text {
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
    }

    &__input {
      width: 122px;
      height: 14px;
      font-size: 11px;
      line-height: 13px;
      text-align: right;
      background-color: #202020;
    }

    &__input::placeholder {
      width: 122px;
      height: 14px;
      font-size: 11px;
      line-height: 13px;
      text-align: right;
      background-color: #202020;
    }

    &__border {
      border-top: .5px solid #424242;
      margin: 16px 0 17px;
    }

    &__redact {
      width: 100px;
      margin-top: 220px;
      font-size: 13px;
      line-height: 16px;
      transition: opacity .3s;
      cursor: pointer;
    }
    
    &__redact:hover {
      opacity: .6;
    }

    &__link {
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      color: #EE3465;
      margin-top: 16px;
      transition: opacity .3s;
    }
    
    &__link:hover {
      opacity: .6;
    }
  }
  
  @media(max-width: 769px){
    .profile {

      &__title {
        margin-bottom: 96px;
      }
      
      &__redact {
        margin-top: 210px;
      }
    }
  }
  
  @media(max-width: 480px){
    .profile {
      width: 260px;

      &__title {
        margin-bottom: 80px;
      }

      &__block {
        width: 260px;
      }

      &__redact {
        margin-top: 379px;
        font-size: 12px;
        line-height: 15px;
      }

      &__link {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }

`

export default StyledProfile
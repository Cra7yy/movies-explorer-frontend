import styled from 'styled-components'

const StyledPromo = styled.div`
  padding-top: 75px;
  .promo {
    &__block {
      display: flex;
      justify-content: space-between;
    }

    &__texts {
      max-width: 640px;
    }

    &__title {
      font-size: 50px;
      line-height: 58px;
    }

    &__text {
      font-size: 13px;
      line-height: 16px;
      opacity: 0.5;
      width: 300px;
      margin-top: 36px;
    }

    &__img {
      width: 310px;
      height: 304px;
    }

    &__btn {
      width: 129px;
      height: 36px;
      border: 1px solid #FFFFFF;
      border-radius: 3px;
      opacity: 0.6;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      background-color: #073042;
      margin: 146px 0 75px;
      transition: opacity .3s;
    }

    &__btn:hover {
      opacity: 1;
    }
  }

  @media (max-width: 769px) {
    padding-top: 140px;
    .promo {
      
      &__block {
        flex-direction: column;
        align-items: center;
      }
      
      &__img {
        width: 210px;
        height: 206px;
      }

      &__texts {
        order: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 48px;

      }

      &__title {
        text-align: center;
        line-height: 50px;
      }

      &__text {
        text-align: center;
        margin-top: 22px;
      }

      &__btn {
        margin: 72px 0 76px;
      }
    }
  }
  
  @media(max-width: 480px){
    padding-top: 70px;
    .promo {

      &__img {
        width: 210px;
        height: 206px;
      }

      &__texts {
        padding-top: 44px;
      }

      &__title {
        font-size: 30px;
        line-height: 38px;
      }

      &__text {
        margin-top: 24px;
      }

      &__btn {
        margin: 80px 0 30px;
      }
    }
  }
`

export default StyledPromo
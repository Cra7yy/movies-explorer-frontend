import styled from 'styled-components'

const StyledTechs = styled.div`
  .techs {
    padding: 100px 0 100px;

    &__title {
      font-size: 22px;
      line-height: 27px;
      letter-spacing: -0.04em;
      margin-bottom: 23px;
    }

    &__block {
      border-top: 1px solid #DADADA;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 90px;
    }

    &__subject {
      font-size: 50px;
      line-height: 58px;
      letter-spacing: -0.04em;
    }

    &__text {
      margin: 26px 0 100px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      width: 460px;
      text-align: center;
    }

    &__list {
      display: flex;
      gap: 10px;
    }

    &__item {
      width: 90px;
      height: 60px;
      border-radius: 10px;
      background-color: #303030;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.04em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 769px) {
    .techs {
      max-width: 668px;
      padding: 90px 0 90px;

      &__block {
        padding-top: 80px;
      }

      &__text {
        margin: 26px 0 83px;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.04em;
        max-width: 460px;
        text-align: center;
      }

      &__item {
        width: 84px;
        height: 57px;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }

  @media (max-width: 689px) {
    .techs__list {
      flex-wrap: wrap;
    }
  }
  
  @media(max-width: 480px){
    .techs {
      padding: 70px 0 70px;
      width: 284px;

      &__title {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 28px;
      }

      &__block {
        border-top: 1px solid #000000;
        padding-top: 60px;
        justify-content: center;
      }

      &__subject {
        font-size: 30px;
        line-height: 36px;
        letter-spacing: -0.04em;
      }

      &__text {
        margin: 24px 0 50px;
        font-size: 11px;
        line-height: 16px;
        width: 292px;
        text-align: center;
      }

      &__list {
        width: 178px;
      }
    }
  }
`

export default StyledTechs
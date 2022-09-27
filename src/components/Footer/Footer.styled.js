import styled from 'styled-components'

const StyledFooter = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-size: 13px;
      line-height: 16px;
      color: #8B8B8B;
    }

    &__block {
      width: 100%;
      height: 56px;
      border-top: 1px solid #424242;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    &__year {
      font-size: 13px;
      line-height: 16px;
    }

    &__list {
      display: flex;
      gap: 20px;
    }

    &__item {
    }

    &__link {
      font-size: 13px;
      line-height: 16px;
      transition: opacity .3s;
    }
    
    &__link:hover {
      opacity: .6;
    }
  }

  @media (max-width: 769px){
    .footer {

      &__title {
        margin-top: 79px;
      }
    }
  }
  
  @media (max-width: 480px){
    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        font-size: 12px;
        line-height: 15px;
      }

      &__block {
        width: 100%;
        height: 127px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        margin-top: 21px;
        margin-bottom: 10px;
      }

      &__year {
        order: 1;
        font-size: 13px;
        line-height: 16px;
        color: #8B8B8B;
      }

      &__list {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      &__item {
      }

      &__link {
        font-size: 13px;
        line-height: 16px;
        transition: opacity .3s;
      }
    }
  }
`

export default StyledFooter
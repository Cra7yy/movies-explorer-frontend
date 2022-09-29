import styled from 'styled-components'

const StyledNotFound = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .not-found {

    &__title {
      font-size: 140px;
      line-height: 169px;
    }

    &__text {
      font-size: 16px;
      line-height: 19px;
      padding: 5px 0 184px;
    }

    &__back {
      font-size: 14px;
      line-height: 17px;
      color: #4285F4;
      transition: opacity .3s;
    }
    
    &__back:hover {
      opacity: .6;
    }
  }
  
  @media(max-width: 480px){
    .not-found {

      &__title {
        font-size: 80px;
        line-height: 97px;
      }

      &__text {
        font-size: 12px;
        line-height: 15px;
        padding: 10px 0 284px;
      }

      &__back {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
`

export default StyledNotFound
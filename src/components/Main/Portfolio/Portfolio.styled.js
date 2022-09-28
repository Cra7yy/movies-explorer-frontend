import styled from 'styled-components'

const StyledPortfolio = styled.section`
  .portfolio {

    &__title {
      font-size: 18px;
      line-height: 20px;
      color: #A0A0A0;
    }

    &__list {
      padding: 50px 0 125px;
    }

    &__item {
    }

    &__item:not(:last-child) {
      margin-bottom: 20px;
      border-bottom: 1px solid #E8E8E8;
      padding-bottom: 19px;
    }

    &__link {
      background: url('/images/arrow.svg') right no-repeat;
      font-size: 30px;
      line-height: 50px;
      letter-spacing: -0.04em;
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      transition: background-position-y .2s, opacity .3s;
    }

    &__link:hover {
      background-position-y: 35%;
      opacity: .6;
    }
  }
    @media (max-width: 769px) {
      .portfolio {
        max-width: 668px;

        &__list {
          padding: 50px 0 90px;
        }

        &__link {
          font-size: 28px;
        }
      }
    }
  
  @media (max-width: 480px) {
      .portfolio {
        width: 292px;

        &__title {
          font-size: 14px;
          line-height: 20px;
        }

        &__list {
          padding: 40px 0 70px;
        }

        &__link {
          font-size: 18px;
          line-height: 28px;
        }
      }
    }
`

export default StyledPortfolio
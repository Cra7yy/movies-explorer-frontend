import styled from 'styled-components'

const StyledAboutMe = styled.div`
  .about-me {
    padding: 110px 0 101px;

    &__title {
      font-size: 22px;
      line-height: 27px;
      letter-spacing: -0.04em;
    }

    &__block {
      margin-top: 23px;
      border-top: 1px solid #DADADA;
      padding-top: 66px;
      display: flex;
      justify-content: space-between;
    }

    &__texts {
      max-width: 600px;
    }

    &__subject {
      font-size: 50px;
      line-height: 58px;
      letter-spacing: -0.04em;
    }

    &__subtitle {
      font-size: 18px;
      line-height: 20px;
      margin: 18px 0 26px;
    }

    &__text {
      font-size: 14px;
      line-height: 22px;
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 82px;
    }

    &__link {
      max-width: 70px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      transition: opacity .3s;
    }

    &__link:hover {
      opacity: .6;
    }

    &__img {
      width: 270px;
      height: 327px;
      border-radius: 10px;
      margin-left: 20px;
    }
  }

    @media (max-width: 769px) {
      .about-me {
        max-width: 668px;
        padding: 90px 0 91px;

        &__title {
          font-size: 22px;
          line-height: 27px;
          letter-spacing: -0.04em;
        }

        &__subject {
          font-size: 40px;
          line-height: 40px;
          letter-spacing: -0.04em;
        }

        &__subtitle {
          font-size: 12px;
          line-height: 18px;
          margin: 16px 0 20px;
        }

        &__text {
          font-size: 12px;
          line-height: 18px;
        }

        &__links {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 70px;
        }

        &__link {
          max-width: 70px;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          transition: opacity .3s;
        }

        &__img {
          width: 255px;
          height: 307px;
          border-radius: 10px;
          margin-left: 49px;
        }
      }
    }
  
  @media(max-width: 480px){
    .about-me {
      width: 292px;
      padding: 70px 0 70px;

      &__title {
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.04em;
      }

      &__block {
        margin-top: 28px;
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &__texts {
        max-width: 600px;
        order: 1;
      }

      &__subject {
        font-size: 30px;
        line-height: 36px;
        margin-top: 40px;
      }

      &__subtitle {
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        margin: 20px 0 20px;
      }

      &__text {
        font-size: 11px;
        line-height: 16px;
      }

      &__links {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 40px;
      }

      &__link {
        max-width: 70px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      }

      &__img {
        width: 292px;
        height: 352px;
        border-radius: 10px;
        margin-left: 0;
      }
    }
  }
`

export default StyledAboutMe
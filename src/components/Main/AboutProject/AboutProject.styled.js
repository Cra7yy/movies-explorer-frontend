import styled from 'styled-components'

const StyledAboutProject = styled.div`
  .about-project {
    padding-top: 110px;

    &__title {
      font-size: 22px;
      line-height: 27px;
      letter-spacing: -0.04em;
    }

    &__subtitle {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.04em;
    }

    &__block-text {
      display: flex;
      gap: 40px;
      border-top: 1px solid #DADADA;
      padding-top: 70px;
      margin: 23px 0 110px;
    }

    &__texts {
      width: 550px;
      display: flex;
      flex-direction: column;
      gap: 26px;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
    }

    &__progress-bar {
      display: flex;
      padding-bottom: 110px;
    }

    &__progress {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }

    &__progress-backend {
      width: 228px;
    }

    &__progress-frontend {
      width: 912px;
    }

    &__progress-text {
      width: 100%;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #303030;
      font-size: 14px;
      line-height: 17px;
    }

    &__color {
      background-color: #3DDC84;
      color: #000000;
    }

    &__progress-title {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #8B8B8B;
    }
  }

  @media (max-width: 769px) {
    .about-project {
      padding-top: 90px;
      max-width: 668px;

      &__block-text {
        margin-bottom: 93px;
        gap: 30px;
      }

      &__texts {
        width: 319px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }

      &__text {
        font-size: 12px;
        line-height: 18px;
      }

      &__progress-bar {
        padding-bottom: 90px;
      }

      &__progress-backend {
        max-width: 140px;
      }

      &__progress-frontend {
        max-width: 528px;
      }

      &__progress-title {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #8B8B8B;
      }
    }
  }

  @media (max-width: 480px) {
    .about-project {
      padding-top: 70px;
      width: 284px;

      &__title {
        font-size: 18px;
        line-height: 22px;
      }

      &__subtitle {
        font-size: 18px;
        line-height: 22px;
      }

      &__block-text {
        display: flex;
        flex-direction: column;
        gap: 56px;
        padding-top: 60px;
        margin: 28px 0 60px;
      }

      &__texts {
        width: 284px;
        gap: 16px;
      }

      &__text {
        font-size: 11px;
        line-height: 16px;
      }

      &__progress-bar {
        padding-bottom: 70px;
      }

      &__progress {
        gap: 10px;
      }

      &__progress-backend {
        width: 100px;
      }

      &__progress-frontend {
        width: 184px;
      }

      &__progress-text {
        width: 100%;
        height: 35px;
        font-size: 11px;
        line-height: 13px;
      }

      &__color {
        background-color: #3DDC84;
        color: #000000;
      }

      &__progress-title {
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
  
`

export default StyledAboutProject
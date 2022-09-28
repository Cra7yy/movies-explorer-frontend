import styled from 'styled-components'

const StyledSearchForm = styled.section`
  padding: 70px 0 48px;

  .search {

    &__form {
    }

    &__form-block {
      display: flex;
      justify-content: space-between;
    }

    &__form-fieldset {
    }

    &__form-input {
      background-color: #202020;
      height: 34px;
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
      color: #8B8B8B;
    }

    &__form-input::placeholder {
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
      color: #8B8B8B;
    }

    &__form-button {
      width: 80px;
      height: 34px;
      background-color: #4285F4;
      border-radius: 48px;
      transition: transform .25s;
    }

    &__form-button:hover {
      transform: scale(1.025);
    }

    &__form-button:active {
      transform: scale(0.95);
    }

    &__form-icon {
      background-color: #4285F4;
    }

    &__form-border {
      width: 100%;
      border: 1px solid #424242;
      margin: 13px 0 32px;
    }
  }

  @media (max-width: 1005px) {
    padding: 80px 0 61px;

    .search {

      &__form-border {
        margin: 13px 0 30px;
      }
    }
  }

  @media (max-width: 1005px) {
    padding: 80px 0 61px;

    .search {

      &__form-border {
        margin: 13px 0 30px;
      }
    }
  }

  @media (max-width: 742px) {
    padding: 90px 0 50px;

    .search {

      &__form {
      }

      &__form-fieldset {
      }

      &__form-input {
        height: 22px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
      }

      &__form-input::placeholder {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
      }

      &__form-button {
        width: 80px;
        height: 34px;
        background-color: #4285F4;
        border-radius: 48px;
        transition: transform .25s;
      }

      &__form-border {
        margin: 9px 0 40px;
      }
    }
  }
`

export default StyledSearchForm
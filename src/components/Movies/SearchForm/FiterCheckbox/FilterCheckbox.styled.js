import styled from 'styled-components'

const StyledFilterCheckbox = styled.div`
  .filter {

    &__block {
      display: flex;
      gap: 14px;
    }

    &__checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
      margin: 10px 0 0 20px;
    }

    &__checkbox + .filter__label {
      position: relative;
      padding: 0 0 0 36px;
      cursor: pointer;
      top: 4px;
    }

    &__checkbox + .filter__label:before {
      content: '';
      position: absolute;
      top: -4px;
      left: 0;
      width: 36px;
      height: 20px;
      border-radius: 20px;
      background: #3DDC84;
      box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2);
      transition: .2s;
    }

    &__checkbox + .filter__label:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
      transition: .2s;
    }

    &__checkbox:checked + .filter__label:before {
      background: #3DDC84;
    }

    &__checkbox:checked + .filter__label:after {
      left: 26px;
    }

    &__checkbox:focus + .filter__label:before {
      box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2), 0 0 0 3px rgba(255, 255, 0, .7);
    }

    &__text {
      font-size: 13px;
      line-height: 18px;
    }

    &__text-mini {
      display: none;
    }

    &__text-max {
      
    }
  }

  @media (max-width: 1005px) {
    .filter {

      &__block {
        gap: 16px;
        justify-content: end;
      }
      
      &__text-mini {
        display: block;
      }
      
      &__text-max {
        display: none;
      }
    }
  }

  @media(max-width: 742px){
    .filter {

      &__block {
        gap: 13px;
        justify-content: center;
      }
    }
  }
`

export default StyledFilterCheckbox
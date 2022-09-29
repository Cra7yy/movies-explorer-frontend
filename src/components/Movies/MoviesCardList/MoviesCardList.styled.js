import styled from 'styled-components'

const StyledMoviesCardList = styled.section`
  margin-top: 70px;
  
  .movies {

    &__list {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(min-content, 1fr);
      grid-template-rows: minmax(min-content, max-content) 1fr;
      column-gap: 20px;
      row-gap: 38px;
    }

    &__btn {
      width: 100%;
      height: 36px;
      background-color: #2F2F2F;
      text-align: center;
      border-radius: 6px;
      margin: 50px 0 80px;
      transition: transform .25s;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }

    &__btn:hover {
      transform: scale(1.01);
    }
    
    &__btn:active {
      transform: scale(0.995);
    }
  }
  
  @media(max-width: 1172px){
    .movies {

      &__list {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(min-content, 1fr);
        grid-template-rows: minmax(min-content, max-content) 1fr;
        column-gap: 20px;
        row-gap: 38px;
        justify-items: center;
      }
    }
  }

  @media(max-width: 1005px){
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .movies {

      &__list {
        max-width: 875px;
        display: grid;
        grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
        grid-template-rows: minmax(min-content, max-content) 1fr;
        column-gap: 30px;
        row-gap: 38px;
      }
    }
  }
  
  @media(max-width: 742px){
    margin-top: 40px;
    
    .movies {

      &__list {
        grid-template-columns: minmax(min-content, 1fr);
        grid-template-rows: minmax(min-content, max-content) 1fr;
        row-gap: 34px;
      }

      &__btn {
        width: 300px;
      }
    }
  }
`

export default StyledMoviesCardList
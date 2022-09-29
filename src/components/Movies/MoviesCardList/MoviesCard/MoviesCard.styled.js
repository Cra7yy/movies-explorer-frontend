import styled from 'styled-components'

const StyledMoviesCard = styled.li`
  .movies__item {
  }

  .movies__img {
  }

  .movies__block {
    padding: 14px 0 29px;
    display: flex;
    justify-content: space-between;
  }

  .movies__title {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
  }

  .movies__like {
    width: 24px;
    height: 24px;
    border-radius: 36px;
    background-color: #313131;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .15s;
  }

  .movies__like:hover {
    transform: scale(1.045);
  }

  .movies__like:active {
    transform: scale(0.95);
  }
  
  .movies__like-active {
    background: url('/images/like-active.svg') center no-repeat;
  }
  
  .movies__like-disabled {
    background: url('/images/like.svg') center no-repeat;
  }

  .movies__border {
    width: 100%;
    border: 1px solid #424242;
  }

  .movies__time {
    font-size: 11px;
    line-height: 13px;
    padding-top: 6px;
    color: #8B8B8B;
  }
  
  .none {
    display: none;
  }
  
  @media(max-width: 1172px){
    width: 315px;

    .movies__img {
      width: 315px;
      height: 180px;
    }
  }
  
  @media(max-width: 1005px){
    width: 339px;

    .movies__img {
      width: 339px;
      height: 190px;
    }
  }

  @media(max-width: 742px){
    width: 300px;
    margin-left: -4px;

    .movies__img {
      width: 300px;
      height: 168px;
    }

    .movies__block {
      padding: 15px 0 29px;
    }

    .movies__title {
      font-size: 12px;
      line-height: 15px;
    }

    .movies__time {
      font-size: 10px;
      line-height: 12px;
    }
  }
`

export default StyledMoviesCard
import styled from 'styled-components'

export const StyledColorGrey = styled.section`
  background-color: #272727;
`

export const StyledColorBlue = styled.section`
  background-color: #073042;
`

export const StyledContainer = styled.main`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1178px) {
    padding: 0 15px ;
  }

  @media (max-width: 769px) {
    max-width: 708px;
    padding: 0 0;
  }

  @media (max-width: 769px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    max-width: 292px;
    padding: 0 0;
  }
`
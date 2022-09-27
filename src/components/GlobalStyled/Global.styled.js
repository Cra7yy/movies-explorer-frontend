import styled from 'styled-components'

export const StyledColorGrey = styled.div`
  background-color: #272727;
`

export const StyledColorBlue = styled.div`
  background-color: #073042;
`

export const StyledContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1178px) {
    padding: 0 5px ;
  }

  @media (max-width: 769px) {
    max-width: 708px;
    padding: 0 0;
  }
  
  @media (max-width: 740px) {
    padding: 0 5px;
  }
  
  @media (max-width: 480px) {
    max-width: 292px;
    padding: 0 0;
  }
`
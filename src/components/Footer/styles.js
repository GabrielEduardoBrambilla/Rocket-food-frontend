import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.LIGHT[700]};

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  /* destopk class */
  @media (min-width: 768px) {
    display: flex;
    padding: 30px 27px;
    justify-content: space-evenly;
    align-items: center;
  }
`

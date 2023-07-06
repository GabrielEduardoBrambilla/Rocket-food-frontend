import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  padding: 30px 27px;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.DARK[600]};
  color: ${({ theme }) => theme.COLORS.LIGHT[700]};

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  /* desktop class */
  @media (min-width: 1300px) {
    display: flex;
    padding: 24px 123px;
    justify-content: space-between;
  }
`

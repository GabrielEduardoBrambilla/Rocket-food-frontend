import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 12px 55px 16px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  > div {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: none;
    /* color: ${({ theme }) => theme.COLORS.LIGHT[100]}; */
  }
  @media (min-width: 768px) {
    margin: 12px 0px 16px;
  }
`

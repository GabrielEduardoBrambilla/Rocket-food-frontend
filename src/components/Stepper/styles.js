import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 12px 55px 16px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  > button {
    width: 24px;
    height: 24px;
    align-items: center;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK[300]};
  }
`

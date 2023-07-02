import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.DARK[400]};

    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
`

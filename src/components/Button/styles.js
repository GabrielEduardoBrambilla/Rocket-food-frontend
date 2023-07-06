import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  min-width: 216px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;

  background-color: ${({ theme }) => theme.COLORS.RED[100]};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  border: 0;
  border-radius: 5px;

  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 14px;

  svg {
    font-size: 26px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.RED[200]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.RED[400]};
  }
  /* destopk class */
  @media (min-width: 1300px) {
  }
`

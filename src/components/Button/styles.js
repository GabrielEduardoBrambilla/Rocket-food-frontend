import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  padding: 16px 33px;
  min-width: 216px;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.RED[100]};
  border: 0;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 14px;

  /* destopk class */
  @media (max-width: 768px) {
    display: none;
  }
`

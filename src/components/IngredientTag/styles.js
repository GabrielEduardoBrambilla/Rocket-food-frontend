import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  display: inline-flex;
  gap: 24px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK[1000]};

  border-radius: 5px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  /* destopk class */
  @media (min-width: 768px) {
  }
`

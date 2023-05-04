import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK[1000]};

  border-radius: 5px;
  font-family: Popins, sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  /* destopk class */
  @media (max-width: 768px) {
    display: none;
  }
`

import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 56px 28px 24px;
  background-color: ${({ theme }) => theme.COLORS.DARK[700]};
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;

  img {
    align-self: flex-start;
  }
  p {
    font-size: 21px;
    font-weight: bold;
    p {
      font-size: 12px;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.BLUE[100]};
      text-align: right;
    }
  }
`

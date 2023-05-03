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
    align-items: center;
    align-self: center;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    align-self: center;

    color: ${({ theme }) => theme.COLORS.BLUE[100]};
    text-align: right;
  }
`

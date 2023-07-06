import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  img {
    align-self: flex-start;
    width: 24px;
    height: 24px;
  }
  p {
    display: flex;
    font-size: 21px;
    font-weight: bold;
    align-items: center;
    align-self: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: nowrap;
    flex-shrink: 0;
    span {
      font-size: 12px;
      font-weight: 400;
      align-self: center;
      color: ${({ theme }) => theme.COLORS.BLUE[100]};
      text-align: right;
    }
  }
  .footer-text {
    color: ${({ theme }) => theme.COLORS.LIGHT[700]};
  }
  /* destopk class */
  @media (min-width: 1300px) {
    display: flex;
    justify-content: flex-start;

    img {
      width: 30px;
      height: 30px;
    }
    p {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;

      font-size: 24px;
      font-weight: bold;
      align-self: flex-start;
      gap: 0px;
      line-height: auto;
      span {
        line-height: auto;
        align-self: flex-end;
      }
    }
  }

  .formHeader-text {
    width: 224px;
    height: 44px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 44px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  .formHeader-img {
    align-self: flex-start;
    width: 44px;
    height: 44px;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  height: 100vh;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  font-family: Poppins;

  .back-btn {
    display: flex;
    align-items: center;
    width: 90vw;
    padding: 10vh;
    font-size: 18px;
    font-weight: 500;
    > svg {
      cursor: pointer;
    }
    > span {
      cursor: pointer;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
      font-size: 27px;
      font-style: normal;
      font-weight: 600;
    }
    span {
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
  .thanks {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 1vh;
    color: ${({ theme }) => theme.COLORS.RED[300]};
    flex-direction: column;
    > p {
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 16px;
      font-style: normal;
      gap: 3px;
      font-weight: 400;
    }
    > span {
      a {
        text-decoration: none !important;
        &:hover {
          color: ${({ theme }) => theme.COLORS.RED[200]};
        }
        &:visited {
          color: ${({ theme }) => theme.COLORS.RED[300]};
        }
      }
    }
  }
  @media (min-width: 1300px) {
    .wrapper {
      > p {
        font-size: 40px;
      }
      > span {
        font-size: 24px;
      }
    }
    .thanks {
      > p {
        font-size: 28px;
      }
      > span {
        font-size: 24px;
      }
    }
    .back-btn {
      font-size: 24px;
      font-weight: 700;
    }
  }
`

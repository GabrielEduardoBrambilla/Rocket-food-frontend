import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};

  .hidden {
    display: none;
  }
  .order-info-wrapper {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 25px auto;
    gap: 25px;

    > .orderPrice {
      font-size: 20px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: 160%;
      padding: 0 0 20px 0;
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT[300]};
      font-size: 32px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }
  .payment-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    > p {
      display: flex;
      align-items: left;
      width: 350px;
      color: ${({ theme }) => theme.COLORS.LIGHT[300]};

      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }

  @media (min-width: 1300px) {
    .payment-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 530px;

      p {
        width: 530px;
        align-items: left;
      }
    }

    .wrapper {
      display: flex;
      width: 90%;
      margin: auto;
      flex-direction: row;
      justify-content: space-around;
      .order-info-wrapper {
        width: 350px;
        margin: unset;
      }
      .payment-wrapper {
        width: 550px;
      }
    }
    background-color: ${({ theme }) => theme.COLORS.DARK[400]};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
`

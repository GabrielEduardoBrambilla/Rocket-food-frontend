import styled from 'styled-components'

export const Container = styled.div`
  /* display: flex; */
  flex-direction: column;
  min-height: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};

  .order-info-wrapper {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: auto;
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

  @media (min-width: 1300px) {
    background-color: ${({ theme }) => theme.COLORS.DARK[400]};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
`

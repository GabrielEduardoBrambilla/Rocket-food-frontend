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
  .dish_img {
    grid-area: 'image';
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 90%;
  }
  .order_item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
  }

  .left-section {
    grid-column: 1;
  }

  .middle-section {
    grid-column: 2;
    display: flex;
    flex-direction: column;

    > p {
      font-size: 20px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: 160%;
    }
  }

  .right-section {
    grid-column: 3;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .dele_icon {
    align-self: center;
  }

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.DARK[400]};

    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
`

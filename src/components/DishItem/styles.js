import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;

  .left-section {
    grid-column: 1;
  }

  .dish_img {
    grid-area: 'image';
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 90%;
    cursor: pointer;
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
      cursor: pointer;

      line-height: 160%;
    }
    .dishDesc {
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
  .right-section {
    grid-column: 3;
    font-size: 30px;
    text-align: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  /* destopk class */
  @media (min-width: 1300px) {
    /* padding: 0; */
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 210px;
  min-height: 305px;
  height: max-content;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK[200]};

  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  > img {
    width: 88px;
    height: 88px;
  }

  .plateImg {
    border-radius: 90px;
    object-fit: cover;
    cursor: pointer;
  }

  .topLeftIcon {
    width: 24px;
    height: 22px;
    position: absolute;
    font-size: 24px;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  .title {
    cursor: pointer;
  }
  .description {
    cursor: pointer;
    display: none;
  }
  div {
    > .price {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.BLUE[100]};
    }
  }

  .buttonsWrapper {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 304px;
    height: 482px;

    padding: 24px;
    gap: 15px;
    background-color: ${({ theme }) => theme.COLORS.DARK[200]};

    > img {
      width: 176px;
      height: 176px;
    }

    .topLeftIcon {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
    }

    > p {
      font-family: Poppins;
      font-size: 24px;
      width: 280px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
      word-wrap: break-word;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    white-space: default;

    .description {
      display: block;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      word-wrap: break-word;
      overflow-wrap: break-word;

      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    }
    div {
      .price {
        //styleName: Roboto/Biggest regular;
        font-family: Roboto;
        font-size: 32px;
        font-weight: 400;
        line-height: 51px;
        letter-spacing: 0em;
        text-align: center;

        color: ${({ theme }) => theme.COLORS.BLUE[100]};
      }
    }

    .buttonsWrapper {
      display: flex;
      justify-content: space-evenly;
      gap: 16px;
      grid-template-areas: 'Stepper IncludeButton';
    }
  }
`

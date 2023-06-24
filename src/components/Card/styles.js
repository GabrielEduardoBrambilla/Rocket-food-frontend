import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 210px;
  min-height: 292px;
  padding: 24px;
  margin: 24px;

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
  }

  .topLeftIcon {
    width: 24px;
    height: 22px;
    position: absolute;
    top: 16px;
    right: 16px;
  }
  .description {
    display: none;
  }
  > span {
    font-size: 16px;
    /* margin-bottom: 12px;  */
    color: ${({ theme }) => theme.COLORS.BLUE[100]};
  }

  .buttonsWrapper {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 304px;
    min-height: 462px;
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
    > span {
      //styleName: Roboto/Biggest regular;
      font-family: Roboto;
      font-size: 32px;
      font-weight: 400;
      line-height: 51px;
      letter-spacing: 0em;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.BLUE[100]};
    }
    .buttonsWrapper {
      display: flex;
      justify-content: center;
      margin: 0 24px;
      grid-template-areas: 'Stepper IncludeButton';
    }
  }
`

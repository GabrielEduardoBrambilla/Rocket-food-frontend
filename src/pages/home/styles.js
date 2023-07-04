import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  min-height: 786px;
  font-family: Poppins;

  .swiper-container {
    display: flex;
    width: 380px;
    align-items: center;

    justify-content: center;
    text-align: center;
    flex-direction: row;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .swiper-slide {
    /* background-color: darkblue; */
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-grow: inherit;
    flex-shrink: 1;
    padding: 0 16px;
    /* background-color: red; */
  }

  .warning-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 4px auto;
    font-size: 16px;
    transition: all 2.5s ease;
    color: ${({ theme }) => theme.COLORS.RED[400]};
  }

  .slogan-banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 376px;
    height: 120px;
    margin: 44px auto 47px auto;
    background: var(
      --gradients-200,
      linear-gradient(180deg, #091e26 0%, #00131c 100%)
    );

    .slogan-text {
      display: flex;
      flex-direction: column;
      gap: 0.2em;
      margin: 36px 0 22px 153px;

      .slogan-title {
        color: ${({ theme }) => theme.COLORS.LIGHT[300]};
        font-size: 18px;
        font-weight: 600;
        line-height: 140%;
      }

      .slogan-description {
        color: ${({ theme }) => theme.COLORS.LIGHT[300]};
        font-size: 12px;

        font-family: Poppins;
        line-height: 140%;
      }
    }
    > img {
      display: flex;
      /* object-fit: contain; */
      position: absolute;
      top: -30px;
      left: -30px;
      width: 191px;
      height: 149px;
      flex-shrink: 0;
    }
  }
  .type-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .type-title {
      color: var(--light-light-300, #e1e1e6);
      font-size: 18px;
      font-weight: 500;
      line-height: 140%;
      width: 380px;
      margin: 2px auto;
      margin: 15px auto 0 auto;
    }
  }

  .swiper-slide {
    /* background-color: darkblue; */
    display: flex;
    align-items: center;
    flex-grow: 1;
    min-height: 300px;
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .type-wrapper::-webkit-scrollbar {
    height: 8px;
  }

  .type-wrapper::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK[700]};
  }

  .type-wrapper::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  .type-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media (min-width: 768px) {
    .swiper-container {
      width: 1200px;
    }
    .type-wrapper {
      > div {
        padding: 20px;
      }
      .type-title {
        font-size: 32px;
        width: 1200px;
        margin: auto;
      }
    }
    .swiper-slide {
      flex-shrink: 0;
    }
    .warning-text {
      margin: 8px auto;
      font-size: 24px;

      color: ${({ theme }) => theme.COLORS.RED[400]};
    }
    .slogan-banner {
      width: 1120px;
      height: 260px;
      margin: 164px auto 62px;

      .slogan-text {
        margin: 88px 100px 92px 598px;
        .slogan-title {
          font-size: 40px;
          font-weight: 400;
        }
        .slogan-description {
          font-size: 16px;
          width: auto;
        }
      }
      > img {
        width: 632px;
        height: 406px;
        top: -146px;
        left: -60px;
        flex-shrink: 0;
      }
    }
  }
  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
`

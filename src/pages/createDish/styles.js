import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 364px;
  justify-content: center;
  margin: 10px auto 55px;

  .back-btn {
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;
    line-height: 140%;
    gap: 3px;
    > img {
      width: 22px;
      height: 22px;
    }
  }

  > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }
`

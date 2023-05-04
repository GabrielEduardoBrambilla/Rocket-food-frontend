import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  width: 210px;
  padding: 24px;
  margin: auto;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.DARK[200]};

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  > img {
    width: 88px;
    height: 88px;
  }

  .Icon {
    width: 24px;
    height: 22px;
    position: absolute;
    top: 16px;
    right: 16px;
    /* padding: 24px; */
  }

  > p {
    margin: 12px 0;
  }
  > span {
    font-size: 16px;
    /* margin-bottom: 12px;  */
    color: ${({ theme }) => theme.COLORS.BLUE[100]};
  }
`

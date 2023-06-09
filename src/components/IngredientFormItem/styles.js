import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* Each individual item */
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT[600]};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT[600]}` : 'none'};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT[500]};
  }

  > input {
    height: 32px;
    width: 100%;

    padding: 12px;

    /* Text inside the item */
    /* in light theme goes REALLY dark */
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};

    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }
  }
`

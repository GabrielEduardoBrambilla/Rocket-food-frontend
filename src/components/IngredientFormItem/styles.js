import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT[600]};

  color: ${({ theme }) => theme.COLORS.DARK[300]};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.DARK[600]}` : 'none'};

  margin-bottom: 8px;
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
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }
  }
`

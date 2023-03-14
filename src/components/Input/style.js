import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    padding: 12px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    };

    &:focus {
      outline: none;
    }
  }

  > svg {
      margin-left: 16px;
    };
`;
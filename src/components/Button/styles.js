import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: 56px;
  border: 0;
  padding: 0 32px;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY};


  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`
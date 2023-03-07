import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 56px;
  border: 0;
  padding: 12px 32px;
  border-radius: 5px;
  margin-top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

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
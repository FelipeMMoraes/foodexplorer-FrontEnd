import styled from "styled-components";
// import {} from "../../styles/devices"

export const Container = styled.header`
  grid-area: header;
  
  height: 104px;
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 110px;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > button {
    max-width: 230px;
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 22px;
  }
`

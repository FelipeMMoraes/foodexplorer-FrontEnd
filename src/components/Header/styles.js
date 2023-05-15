import styled from "styled-components";
import { devices, sizes } from "../../styles/devices";

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

  @media (${devices.tablet}){
    padding: 0 55px;
  }

  @media (${devices.mobile}){
    padding: 0 28px;
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 200px;

  @media (${devices.mobile}) {
    max-width: 150px;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 22px;
  }

  @media (${devices.mobile}){
    display: none;
  }
`

export const Receipt = styled.button`
  display: none;
  border: none;
  background: none;
  align-items: left;

  @media (${devices.tablet}){
    display: block;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 22px;
  }
  }
`

export const InputWrapper = styled.div`
  width: 100%;

  @media (${devices.laptop}){
    display: none;
  }
`

export const InputButton = styled.div`
  width: 100%;

  @media (${devices.tablet}){
    display: none;
  }
`
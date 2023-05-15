import { BiReceipt, BiSearch } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logo, Logout, Receipt, InputWrapper, InputButton } from "./styles";
import LogoFoodExplorer from "../../assets/img/LogoFoodExplorer.svg"

import { Button } from "../Button"
import { Input } from "../Input"

export function Header() {
  return (
    <Container>

      <Logo 
        src={LogoFoodExplorer} 
        alt=""
      />

      <InputWrapper>
        <Input placeholder="Busque por pratos ou ingredientes" icon={BiSearch}/>
      </InputWrapper>

      <InputButton>
        <Button title="Meu Pedido (0)" icon={BiReceipt}/>
      </InputButton>

        <Receipt>
          <BiReceipt />
        </Receipt>

        <Logout>
          <FiLogOut />
        </Logout>


    </Container>
  )
}
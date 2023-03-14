import { BiReceipt, BiSearch } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logo, Logout } from "./styles";
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

      <Input placeholder="Busque por pratos ou ingredientes" icon={BiSearch}/>


      <Button title="Meu Pedido (0)" icon={BiReceipt}/>
  

      <Logout>
        <FiLogOut />
      </Logout>

    </Container>
  )
}
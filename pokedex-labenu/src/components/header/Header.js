import { React } from "react";
import { CustomHeader, LogoBackground, ButtonHeader } from "./styled";
import logo from "../../assets/Logo.png";
import { goToPokedex, goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { 
Menu,
MenuButton,
MenuList,
MenuItem,
Flex,
Image,
IconButton, 
Icon
} 
from "@chakra-ui/react";
import {
  HamburgerIcon,
} 
from "@chakra-ui/icons"
import {
  MdOutlineCatchingPokemon,
  MdHome} 
from 'react-icons/md'


function Header() {
    const navigate = useNavigate()
  return (
      <Flex w={"100%"} bg={"#343740"} boxShadow={'2xl'} h={['125px']} justify={'space-around'} align={'center'}>
        <Image src={logo} onClick={() => goToHome(navigate)} _hover={{cursor: "pointer"}} maxW={'200px'}></Image>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            bg={'#565b6a'}
            width={'50px'}
            height={'50px'}
            _hover={{
              bg: "#616778"
            }}
          />
          <MenuList justify={'center'} align={'center'}>
            <MenuItem>
              <Icon onClick={() => goToHome(navigate)} as={MdHome} w={'20px'} h={'20px'} marginRight={'8px'}/>
              Home
            </MenuItem>
            <MenuItem>
              <Icon as={MdOutlineCatchingPokemon} w={'20px'} h={'20px'} marginRight={'8px'}/>
              Pokédex
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <ButtonGroup>
          <Button onClick={() => goToHome(navigate)}>Home</Button>
          <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
        </ButtonGroup> */}

      </Flex>

        // <CustomHeader>
        //   <LogoBackground onClick={() => goToHome(navigate)} src={logo} />
        //   <Menu>
        //     <ButtonHeader onClick={() => goToHome(navigate)}>Home</ButtonHeader>
        //     <ButtonHeader onClick={() => goToPokedex(navigate)}> Pokedex </ButtonHeader>
        //   </Menu>
        // </CustomHeader>
  );
};

export default Header;

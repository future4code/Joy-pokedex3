import { React } from "react";
import logo from "../../assets/Logo.png";
import { goToPokedex, goToHome} from "../../routes/Coordinator";
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
import StyleColorMode from "../../pages/darkMode/DarkModeButton";


function Header() {
    const navigate = useNavigate()
  return (
      <Flex 
        w={"100%"} 
        bg={"#161b25"}  
        borderBottonColor={"#000000"} 
        boxShadow={'2xl'} h={['125px']} 
        justify={'space-around'} 
        align={'center'}
        >
        <Image 
        src={logo} 
        onClick={() => goToHome(navigate)} 
        _hover={{cursor: "pointer"}} 
        maxW={'200px'} />
        <Flex justify={'flex-end'} align={'center'}>
          <Menu>
            <MenuButton
              marginRight={'16px'}
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon color={'white'} />}
              variant='outline'
              bg={'#161b25'}
              boxShadow={'base'}
              p={'6'}
              width={'50px'}
              height={'50px'}
              _hover={{
                bg: "#696f81"
              }}
            />
            <MenuList justify={'center'} align={'center'}>
              <MenuItem onClick={() => goToHome(navigate)}>
                <Icon as={MdHome} w={'20px'} h={'20px'} marginRight={'8px'}/>
              <p>Home</p> 
              </MenuItem>
              <MenuItem onClick={() => goToPokedex(navigate)}>
                <Icon as={MdOutlineCatchingPokemon} w={'20px'} h={'20px'} marginRight={'8px'}/>
                <p>Pokédex</p>
              </MenuItem>
            </MenuList>
          </Menu>
          <StyleColorMode/>
        </Flex>
      </Flex>

  );
};

export default Header;

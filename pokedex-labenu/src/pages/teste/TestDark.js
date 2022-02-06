import { IconButton } from "@chakra-ui/react"
import { MoonIcon } from "@chakra-ui/icons"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"


export default function StyleColorMode() {
    const { toggleColorMode } = useColorMode()
  
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
  
    return (
      <>
        <IconButton icon={<MoonIcon/>} size='sm' onClick={toggleColorMode} />
          
 
      </>
    )
  }
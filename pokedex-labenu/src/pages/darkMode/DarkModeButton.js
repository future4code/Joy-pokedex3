import { IconButton } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"


export default function StyleColorMode() {
    const { toggleColorMode, colorMode } = useColorMode()
  
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
  
    return (
      <>
        {colorMode === 'light' ? <IconButton icon={<MoonIcon/>} bg={'#161b25'} color={'white'}  variant={'outline'} size='l' onClick={toggleColorMode} width={'40px'} height={'40px'} /> 
          : <IconButton icon={<SunIcon/>} variant={'outline'} size='l' onClick={toggleColorMode}  width={'40px'} height={'40px'}/>}
      </>
    )
  }
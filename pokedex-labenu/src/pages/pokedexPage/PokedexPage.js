import { React, useEffect, useContext } from 'react'
import CardPokedex from '../../components/CardPokedex/CardPokedex'
import GlobalStateContext from '../../contexts/GlobalContextState';
import { removerPokedex } from '../../services/removerPoke';
import pokeball from '../../assets/pokeball.png'
import Header from '../../components/header/Header';
import { Flex, Grid, Heading, Image, Text, Tooltip } from '@chakra-ui/react';
import { goToHome } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';


const PokedexPage = () => {
    const {pokedex } = useContext(GlobalStateContext);
    const navigate = useNavigate()

    useEffect(() => {
    }, [pokedex])

    
    return(
        <>
        <Header/>
        <Flex direction={'column'} align={'center'}>
            <Heading marginTop={'15px'}>Pokédex</Heading>
        </Flex>
            <Flex align={'center'} justify={'center'}>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} align={'center'} marginTop={['13px']}
                >
                {!pokedex || pokedex.length === 0 ? 
                (<Flex 
                    direction={'column'} 
                    align={'center'}
                    justify={'center'}
                    onClick={() => goToHome(navigate)}
                    _hover={
                        {
                            cursor: "pointer"
                        }
                    }  
                    >
                    <Tooltip label={'Voltar para Home'}>
                        <Image 
                        src={pokeball} 
                        w={'250px'}
                        _hover={
                            {
                                w: "300px", 
                            }
                        }/>
                    </Tooltip>
                        <Text
                        padding={"5px"}
                        maxW={'200px'} 
                        >Pokedex vazia
                        </Text>
                </Flex>)
                : pokedex.map((pokemon) => {
            return (
                <CardPokedex key={pokemon.name} name={pokemon.name} pokemon={pokemon} removerPokedex={removerPokedex}/>)
            })}            
                </Grid>
            </Flex>
        </>
    )
}

export default PokedexPage
import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import BASE_URL from '../../constants/baseURL'

const DetalhesPage = () => {

    const { id } = useParams()
    const [detailsPokemon, setDetailsPokemons] = useState({})
    
    const getDetailsPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect (() => {
        getDetailsPokemon()
    }, [])

    // const pokemonInfo = detailsPokemon.map((pokemon) => {
    //     return(
    //         {pokemon}
    //     )
    // })
    return(
        <div>
            <Header/>
            {/* {pokemonInfo} */}
        </div>
    )
}

export default DetalhesPage 
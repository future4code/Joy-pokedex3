import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPokemon from '../../components/cardPokemon/CardPokemon'
import Header from '../../components/header/Header'

const HomePage = () => {
    return(
        <div>
            <Header/>
            <CardPokemon />
        </div>
    )
}

export default HomePage 
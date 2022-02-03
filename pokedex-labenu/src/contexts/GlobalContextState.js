import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalState from "./GlobalState"

export default function GlobalContextState() {
    const [pokemonList, setPokemonList] = React.useState([])

const getPokemonList = () => {
    axios.get(`${BASE_URL}?limit=20&offset=0/`)
    .then((res) => {
        setPokemonList(res.data.results)
        console.log(res.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  React.useEffect(() =>{
    getPokemonList()
  }, [])

   const renderedPokemonList = pokemonList.map((pokemon)=>{
       const pokemonName = pokemon.name
    return(
        {pokemonName}
    )
    })}
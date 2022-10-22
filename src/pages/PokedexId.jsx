import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'

const PokedexId = () => {

    const {id} =useParams()
    const [pokemon, setpokemon] = useState()

    const [hasError, sethasError] = useState(false)
    useEffect(( )=>{
        const URL =`https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
        .then(res => setpokemon(res.data))
        .catch( err => console.log(err),
        sethasError(true)
        )
    }),[]


    if(hasError){
        return <Pokemon404 />
    }
  return (
    <article>
        <header>
            <img src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />
        </header>
        <section>
            <h2>{pokemon?.name}</h2>
        </section>
    </article>
  )
}

export default PokedexId
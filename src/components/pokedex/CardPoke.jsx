import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CardPoke = ({url}) => {

    const [pokemon, setpokemon] = useState()

    useEffect(( )=> {
  axios.get(url)
 .then(res => setpokemon(res.data))
 .cath(err => console.log(err))
    },[])
 const navigate = useNavigate()
    const handleClick = () =>{
 navigate(`/pokedex/${pokemon.id}`)
    }
  return (
   <article onClick={handleClick} className='card-poke'>
   <header className='card-poke_header' >
   <img src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" className='poke-img'/>
   </header>
   <section className='card-poke__body'>
    <h3 className='card-poke__name'>{pokemon?.name}</h3>
    <ul className='card-poke__types-container'>
        {
            pokemon?.types.map(type =>{
                <li key={type.slot} className='card-poke__type'>{type.type.name}</li>

            })
        }
    </ul>
    <p className='card-poke__type-label'>Type</p>
    <ul className='card-poke__stats-container'>
        {
            pokemon?.stats.map(stat =>{
                <li key={stat.stat.name} className='card-poke__stat'>
                     <span className='card-poke__stat-label'>{stat.stat.name}</span>
                     <span className='card-poke__stat-number'>{stat.base_stat}</span> 
                     </li>
            })
        }
    </ul>
   </section>
   </article>
  )
}

export default CardPoke
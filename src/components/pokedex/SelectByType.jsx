import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({setselectedType}) => {

    const [types, settypes] = useState()
    useEffect(()=>{
        const Url = "https://pokeapi.co/api/v2/type"
        axios.get(Url)
        .then(res => settypes(res.data.results))
        .catch(err => console.log(err))
    }),[]

    const handleChange = e =>{
setselectedType(e.target.value)
    }
  return (
    <select name="" id="" onChange={handleChange}>
        <option value="All Pokemons"> all Pokemons</option>
        {
            types?.map(type =>(
                <option value={type.url} key={type.url} >
                    {type.name}
                </option>
            ))
        }
        <option value=""></option>
        <option value=""></option>
    </select>
  )
}

export default SelectByType
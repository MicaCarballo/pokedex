import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'

const Pokedex = () => {

 const [pokemons, setpokemons] = useState()
 const [selectedType, setselectedType] = useState()
 useEffect(() =>{

if(selectedType !== "All Pokemons"){
    axios.get(selectedType)
    .then(res => {
        const result = res.data.pokemon.map(e =>e.pokemon)
    setpokemons(result)})
    .catch(err => console.log(err))
}
else {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    axios.get(URL)
    .then(res => setpokemons(res.data.results))
    .catch( err => console.log(err))
}

 }, [selectedType])

   const user = useSelector(state => state.userName)
  return (
    <div>
        <header>
            <h1>Pokedex</h1>
            <p>Welcome <span>  {userName}</span> , here you can search for your favorite pokemon</p>
        </header>
        <aside>
            <InputSearch />
            <SelectByType setselectedType={setselectedType}/>
        </aside>
        <main>
            <div className='card-container'>
                {
                    pokemons?.map(pokemon => (
                        <CardPoke  key={pokemon.url}
                        url={pokemon.url}
                        />

                    ))
                }


            </div>
        </main>
    </div>
  )
}

export default Pokedex
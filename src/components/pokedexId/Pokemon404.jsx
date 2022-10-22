import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
  return (
    <>
    <h1>pokemon has not been found</h1>
    <img src="https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/99f44446ca2bf79d18fca7403c712d1c.png?compress=1&resize=400x300&vertical=top" alt="" />
  <Link to={`/pokedex`} >Home</Link>
   </>
  )
}

export default Pokemon404
import React from 'react'
import FormHome from '../components/home/FormHome'
import "./styles/home.css"

const Home = () => {
  return (
   <article className='pokedex'>
    <img  className='pokedex_img' src="/images/home/pokedex-logo.png" alt="" />
    <h2 className='pokedex_subtitle'>Hey Trainer</h2>
    <p className='pokedex_text'> To get started tell me your name</p>
   <FormHome/>
   </article>
  )
}

export default Home
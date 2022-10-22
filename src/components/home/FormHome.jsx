import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/UserName.slices'

const FormHome = () => {
    const dispatch = useDispatch()
   const navigate = useNavigate()

 const submit = e =>{
  e.preventDefault()
  
  dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
 navigate(`/pokedex`)
}

  return (
    <form  onSubmit={submit} className='pokedex_form'>
    <input type="text" className='pokedex_input' placeholder='enter your name'/>
    <button className='podedex_btn'>Gotta cath em all!</button>
  </form>
  )
}

export default FormHome
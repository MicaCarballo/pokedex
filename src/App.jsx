import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexId from './pages/PokedexId'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
 

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<PokedexId/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

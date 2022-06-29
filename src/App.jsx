import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar'

import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App

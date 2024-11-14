import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentHome } from './Components/ComponentHome'
import { ComponentAbout } from './Components/ComponentAbout'
import { ComponentCalculator } from './Components/ComponentCalculator'
import { ComponentError } from './Components/ComponentError'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<ComponentHome />} ></Route>
          <Route path='/about' element={<ComponentAbout />} ></Route>
          <Route path='/calculator' element={<ComponentCalculator />} ></Route>
          <Route path='/*' element={<ComponentError />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

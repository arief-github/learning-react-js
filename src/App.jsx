import { useState } from 'react'
import './App.css'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'

import colorData from './data/color-data.json'
import { v4 } from 'uuid'

function App() {
  const [colors, setColors] = useState(colorData)

  return (
    <>
      <ColorList />

      <h2>Color Wheel Form</h2>

      <AddColorForm />
    </>
  )
}

export default App

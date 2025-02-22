import { useState } from 'react'
import './App.css'
import ColorList from './components/ColorList'
import colorData from './data/color-data.json'

function App() {
  const [colors] = useState(colorData)

  return (
    <ColorList colors={colors}/>
  )
}

export default App

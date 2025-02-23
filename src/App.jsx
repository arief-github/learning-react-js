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
      <ColorList colors={colors} 
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
            setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />

      <h2>Color Wheel Form</h2>

      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ]
          setColors(newColors)
        }}
      />
    </>
  )
}

export default App

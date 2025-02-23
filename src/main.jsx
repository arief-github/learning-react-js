import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ColorContext } from './context/ColorContext.js'
import colors from './data/color-data.json'

createRoot(document.getElementById('root')).render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>,
)

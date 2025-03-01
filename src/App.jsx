import './App.css'
import Counter from './components/Counter'
import { CounterProvider } from './context/counter'

function App() {

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default App

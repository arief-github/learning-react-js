import './App.css'
import { Switch } from './components/Switch'
import useToggle from './hooks/useToggle'

// COUNTER APP
// import Counter from './components/Counter'
// import { CounterProvider } from './context/counter'

// USERDISPLAY APP
// import UserDataDisplay from './components/UserDataDisplay'
// import UserSetting from './components/UserProfile'
// import { UserProvider } from './context/user-context'


function App() {
  const { on, togglerProps } = useToggle()

  return (
    <div>
      <Switch on={on} {...togglerProps} />
    </div>
  )
}

export default App

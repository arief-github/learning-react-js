import './App.css'

// COUNTER APP
// import Counter from './components/Counter'
// import { CounterProvider } from './context/counter'

// USERDISPLAY APP
// import UserDataDisplay from './components/UserDataDisplay'
// import UserSetting from './components/UserProfile'
// import { UserProvider } from './context/user-context'

import { Toggle } from './context/toggle-context'
import { ToggleOn, ToggleOff, ToggleButton } from './helpers/toggle-helpers.jsx'

function App() {
  return (
    <Toggle>
      <ToggleOn>The Button is on</ToggleOn>
      <ToggleOff>The Button is off</ToggleOff>
      <div>
        <ToggleButton />
      </div>
    </Toggle>
  )
}

export default App

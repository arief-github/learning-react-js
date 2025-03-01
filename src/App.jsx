import './App.css'

// COUNTER APP
// import Counter from './components/Counter'
// import { CounterProvider } from './context/counter'

// USERDISPLAY APP
import UserDataDisplay from './components/UserDataDisplay'
import UserSetting from './components/UserProfile'
import { UserProvider } from './context/user-context'

function App() {
  return (
    <div 
      style={{
        minHeight: 350,
        width: 300,
        backgroundColor: '#ddd',
        borderRadius: 4,
        padding: 10,
      }}
    >
      <UserProvider>
        <UserSetting/>
        <UserDataDisplay/>
      </UserProvider>
    </div>
  )
}

export default App

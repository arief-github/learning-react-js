import './App.css'
import { Switch } from './components/Switch'

// COUNTER APP
// import Counter from './components/Counter'
// import { CounterProvider } from './context/counter'

// USERDISPLAY APP
// import UserDataDisplay from './components/UserDataDisplay'
// import UserSetting from './components/UserProfile'
// import { UserProvider } from './context/user-context'

// COUNTER APP
// import Toggle from './components/Toggle'
import PropTypes from 'prop-types';
import { Toggle, useToggle } from './context/toggle-context';

const ToggleOn = ({ children }) => {
  const { on } = useToggle()
  return on ? children : null;
} 
ToggleOn.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const ToggleOff = ({ children }) => { 
  const { on } = useToggle()
  return on ? null : children
} 
ToggleOff.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

function ToggleButton({ ...props }) {
  const { on, toggle } = useToggle()
  
  return <Switch on={on} onClick={toggle} {...props} />
}
ToggleButton.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

function MyToggleButton() {
  const { on } = useToggle()
  
  return on ? 'the button is on yo' : 'the button is off soo'
}

// const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <Toggle>
      <ToggleOn>The Button is on</ToggleOn>
      <ToggleOff>The Button is off</ToggleOff>
      <span>Hellow</span>
      <div>
        <ToggleButton />
      </div>
      <MyToggleButton />
    </Toggle>
  )
}

export default App

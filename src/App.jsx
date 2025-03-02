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
import Toggle from './components/Toggle'
import PropTypes from 'prop-types';

const ToggleOn = ({ on, children }) => (on ? children : null);
ToggleOn.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const ToggleOff = ({ on, children }) => (on ? null : children);
ToggleOff.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

function ToggleButton({on, toggle }) {
  return <Switch on={on} onClick={toggle} />
}
ToggleButton.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

function MyToggleButton({ on, toggle }) {
  return on ? 'the button is on yo' : 'the button is off soo'
}

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <Toggle allowedTypes={allowedTypes}>
      <ToggleOn>The Button is on</ToggleOn>
      <ToggleOff>The Button is off</ToggleOff>
      <span>Hellow</span>
      <ToggleButton />
      <MyToggleButton />
    </Toggle>
  )
}

export default App

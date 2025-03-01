import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import './App.css'
import reducer from "./reducers/reducers"

import { Home, Menu, Boots, Basket } from './components'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate
          loading={<div>loading...</div>}
          persistor={persistor}
        >
          <BrowserRouter>
            <Menu />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/boots">
                <Boots />
              </Route>
            </Switch>
            <Basket />
          </BrowserRouter>
        </PersistGate>

      </Provider>
    </div>
  )
}

export default App

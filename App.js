import React from 'react'
import Router from './app/route/Routes.js'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './app/reducers'

export default App = () => (
    <Provider
        store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
    >
        <Router/>
    </Provider>
)
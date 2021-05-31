import {createStore , applyMiddleware} from 'redux'
import { pizzaReducer } from './pizza/pizzaReducer'
import { logger } from 'redux-logger'
export let store=createStore(pizzaReducer,applyMiddleware(logger))
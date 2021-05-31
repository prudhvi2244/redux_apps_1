import {createStore} from 'redux'
import { pizzaReducer } from './pizza/pizzaReducer'

export let store=createStore(pizzaReducer)
import {combineReducers} from 'redux'
import superheroesReducer from './superheroesReducer'
import dataReducer from './dataReducer'
export default combineReducers({
	superheroes: superheroesReducer,
	dataReducer
})
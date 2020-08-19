import {createStore, combineReducers} from 'redux';
import foodsReducer from './foods-reducer';

const reducers = combineReducers({
	foods: foodsReducer
});

const store = createStore(reducers);
export default store;
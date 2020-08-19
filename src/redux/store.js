import {createStore, combineReducers} from 'redux';
import foodsReducer from './foods-reducer';

const reducers = combineReducers({
	foods: foodsReducer
});

const store = createStore(reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
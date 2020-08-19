import {updateObjectInArray} from '../utils/object-helpes';

const CHANGE_SELECTED = 'foods/CHANGE_SELECTED';

const foodsData = [
	{
		id: 1,
		title: 'с фуа-гра',
		portions: 10,
		mouses: 1,
		like: false,
		weight: 0.5,
		text: 'Печень утки разварная с артишоками.',
		selected: false,
		disabled: false
	},
	{
		id: 2,
		title: 'с рыбой',
		portions: 40,
		mouses: 2,
		like: false,
		weight: 2,
		text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		selected: true,
		disabled: false
	},
	{
		id: 3,
		title: 'с курой',
		portions: 100,
		mouses: 5,
		like: true,
		weight: 5,
		text: 'Филе из цыплят с трюфелями в бульоне.',
		selected: false,
		disabled: true
	}
];

const initialState = {
	data: foodsData
}

const foodsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SELECTED: {
			// console.log(action.selected);
			return {
				...state,
				data: updateObjectInArray(state.data, action.id, 'id', {selected: !action.selected})
			}
		}
		default:
			return state;
	}
}

export const toggleSelected = (id, selected) => ({
	type: CHANGE_SELECTED,
	id,
	selected
});

export default foodsReducer;
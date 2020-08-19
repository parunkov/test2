import React from 'react';
import Food from './Food';
import './Foods.scss';

const Foods = (props) => {
	// console.log(props);
	const foodsElements = props.data.map(food => <Food 
			key={food.id} 
			id={food.id}
			title={food.title} 
			portions={food.portions} 
			mouses={food.mouses} 
			like={food.like}
			weight={food.weight}
			text={food.text}
			selected={food.selected}
			disabled={food.disabled}
			toggleSelected={props.toggleSelected}/>);

	return (
		<div className="Foods">
			{foodsElements}
		</div>
	)
}

export default Foods;
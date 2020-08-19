import React from 'react';
import Food from './Food';

const Foods = (props) => {
	console.log(props);
	const foodsElements = props.data.map(food => <Food 
			key={food.id} 
			title={food.title} 
			portions={food.portions} 
			mouses={food.mouses} 
			like={food.like}
			weight={food.weight}
			text={food.text}
			selected={food.selected}
			disabled={food.disabled}/>);

	return (
		<div className="">
			{foodsElements}
		</div>
	)
}

export default Foods;
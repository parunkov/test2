import React from 'react';
import Food from './Food';

const Foods = (props) => {
	console.log(props);
	const foodsElements = props.data.map(food => <Food key={food.id} title={food.title}/>);

	return (
		<div className="">
			{foodsElements}
		</div>
	)
}

export default Foods;
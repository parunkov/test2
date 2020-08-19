import React from 'react';

const Food = ({title}) => {
	return (
		<div className="Food">
			<div className="Food__card">
				<div className="Food__description">Сказочное заморское яство</div>
				<h2 className="Food__title">Нямушка</h2>
				<div className="Food__subtitle">{title}</div>
			</div>
		</div>
	)
}

export default Food;
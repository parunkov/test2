import React from 'react';
import './Food.scss';

const num2str = function (num, textForms) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

const Food = ({title, portions, mouses, like, weight, text}) => {
	return (
		<div className="Food">
			<div className="Food__card">
				<div className="Food__description">Сказочное заморское яство</div>
				<h2 className="Food__title">Нямушка</h2>
				<div className="Food__subtitle">{title}</div>
				<div className="Food__portions">{portions} {num2str(portions, ['порция', 'порции', 'порций'])}</div>
				<div className="Food__mouses">{mouses} {num2str(mouses, ['мышь', 'мыши', 'мышей'])} в подарок</div>
				{like && <div className="Food__like">заказчик доволен</div>}
				<div className="Food__weight">{weight} кг</div>
			</div>
			<div className="Food__text">{text}</div>
		</div>
	)
}

export default Food;
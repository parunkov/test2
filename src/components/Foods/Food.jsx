import React from 'react';
import './Food.scss';
import { formatNumber } from 'accounting';
// import cn from 'classnames';

const num2str = function (num, textForms) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

const Food = ({id, title, portions, mouses, like, weight, text, selected, disabled, toggleSelected}) => {
	// console.log(toggleSelected);
	return (
		<div className="Food">
			<div className={"Food__card" + (
				disabled ? " Food__card_disabled" :
					selected ? " Food__card_selected" : ""
				)} onClick={() => {
					// console.log(selected);
					// const a = !selected;
					toggleSelected(id, selected);
				}}>
				<div className="Food__description">Сказочное заморское яство</div>
				<h2 className="Food__title">Нямушка</h2>
				<div className="Food__subtitle">{title}</div>
				<div className="Food__portions">{portions} {num2str(portions, ['порция', 'порции', 'порций'])}</div>
				<div className="Food__mouses">{mouses} {num2str(mouses, ['мышь', 'мыши', 'мышей'])} в подарок</div>
				{like && <div className="Food__like">заказчик доволен</div>}
				<div className="Food__weightWrapper">
					<div className="Food__weight">{!(weight - Math.trunc(weight)) ? weight : formatNumber(weight, 1, '',',')}</div>
					<div className="Food__weightUnit">кг</div>
				</div>

			</div>
			{disabled ?
				<div className="Food__text">Печалька, {title} закончился.</div> :
				selected ?
					<div className="Food__text">{text}</div> :
					<div className="Food__text">Чего сидишь? Порадуй котэ, <span className="Food__textLink">купи.</span></div>
			}
		</div>
	)
}

export default Food;
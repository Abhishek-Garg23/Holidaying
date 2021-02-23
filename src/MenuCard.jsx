import React from 'react';

const MenuCard = (props) => {
	return(
		<>
			<div className="box">
				<div className="imgBox">
					<img src={props.imgsrc} alt="holidaying" />
				</div>
				<div className="text">
					<h3>{props.title}</h3>
					<a href="#" className="btn">Order Now</a>
				</div>
			</div>
		</>
	);
}

export default MenuCard;
import React from 'react';
import MenuCard from './MenuCard';
import MenuData from './MenuData';

const Menu = () => {
	return(
		<>
			<section className="menu" id="menu">
				<div className="title">
					<h2 className="titleText">Our <span>M</span>enu</h2>
					<p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR and Gurgoan, based on trends</p>
				</div>
				<div className="content">
				{
					MenuData.map((val, ind) => {
                        return <MenuCard
                            key={ind} 
                            imgsrc={val.imgsrc}
                            title={val.title}
                      />
                    })

                }
				</div>
			</section>
		</>
	);
}

export default Menu;
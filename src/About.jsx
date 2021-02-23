import React from 'react';
import web from '../src/images/about.jpg';

const About = () => {
	return(
		<>
			<section class="about" id="about">
				<div class="row">
					<div class="col50">
						<h2 class="titleText"><span>A</span>bout Us</h2>
						<p>Launched in Gurgoan and Delhi NCR, Fooding has started his project to one of the largest food aggregators in the world. We are enabling our vision of better food for more people. We not only connect people to food in every context but work closely with restaurants to enable a sustainable ecosystem.</p>
					</div>
					<div class="col50">
						<div class="imgBox">
							<img src={web} alt="holidaying"/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
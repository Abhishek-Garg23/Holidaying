import React from 'react';

const Navbar = () => {
	
	function toggleMenu()
	{
		const menuToggle = document.querySelector('.menuToggle');
		const navigation = document.querySelector('.navigation');
		menuToggle.classList.toggle('active');
		navigation.classList.toggle('active');
	}

	window.addEventListener('scroll', function(){
		const header= document.querySelector('header');
		header.classList.toggle("sticky", window.scrollY > 0);
	});

	return(
		<>
			<header>
				<a href="#" className="logo">Fooding<span>.</span></a>
				<div className="menuToggle" onClick="toggleMenu();"></div>
					<ul className="navigation">
						<li><a href="#banner" onClick="toggleMenu();">Home</a></li>
						<li><a href="#about" onClick="toggleMenu();">About</a></li>
						<li><a href="#menu" onClick="toggleMenu();">Menu</a></li>
						<li><a href="#SearchRestaurant" onClick="toggleMenu();">Search Restaurant</a></li>
					</ul>
			</header>
		</>
	);
}

export default Navbar;
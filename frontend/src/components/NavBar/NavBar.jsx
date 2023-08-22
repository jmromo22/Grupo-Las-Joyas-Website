import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import instagramLogo from '../../assets/instagramLogo.png';
import facebookLogo from '../../assets/facebookLogo.png';
import yelpLogo from '../../assets/yelpLogo.png';

export default function NavBar() {
	return (
		<nav className={styles.navBar}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
			</div>

			<div className={styles.navLinks}>
				<Link to='/home'>Home</Link>
				<Link to='/gallery'>Gallery</Link>
				<Link to='/contact'>Contact</Link>
			</div>
			<div className={styles.socials}>
				<Link to='https://www.instagram.com/lasjoyas14k/?hl=en'>
					<img src={instagramLogo} alt='Instagram' />
				</Link>
				<Link to='https://www.facebook.com/profile.php?id=100009084781103'>
					<img src={facebookLogo} alt='Facebook' />
				</Link>
				<Link to='https://yelp.to/yXIJAC2Dpt'>
					<img src={yelpLogo} alt='Yelp' />
				</Link>
			</div>
		</nav>
	);
}

import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

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
				<Link to='https://www.instagram.com/lasjoyas14k/?hl=en'>Home</Link>
				<Link to='https://www.facebook.com/profile.php?id=100009084781103'>Gallery</Link>
				<Link to='https://yelp.to/yXIJAC2Dpt'>Contact</Link>
			</div>
		</nav>
	);
}

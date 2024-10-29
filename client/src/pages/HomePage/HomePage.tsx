import React from 'react';
import styles from './HomePage.module.scss';
import HeaderComponent from './components/Header/HeaderComponent';
export default function HomePage() {
	return (
		<div className={styles.containerHomePage}>
			<header>
				<HeaderComponent/>
			</header>
			<main></main>
			<footer></footer>
		</div>
	);
}

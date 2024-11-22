import React from 'react';
import styles from './Home.module.scss';
import HeaderComponent from '../components/Header/HeaderComponent';
import Top from './ui/Top/Top';
import Header from './ui/Header/Header';
export default function HomePage() {
	return (
		<div className={styles.containerHomePage}>
			<header>
				<Top />
				<Header />
			</header>

			<main></main>
			<footer></footer>
		</div>
	);
}

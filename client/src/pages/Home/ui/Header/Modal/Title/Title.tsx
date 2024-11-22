import React from 'react'
import styles from './Title.module.scss'
export default function Title() {
	return (
		<div className={styles.popupHeader}>
			<div className={styles.popupLogo}></div>
			<h1 className={styles.headerTitle}>1163 пиццерии в 23 странах</h1>
		</div>
	);
}

import React from 'react'
import styles from './BigSity.module.scss'
import { Link } from 'react-router-dom';
export default function BigСity({ handleNewCity, setActive }) {
	return (
		<div className={styles.popupActions}>
			{/* <div className={styles.popupSearch}>
				<input
					className={styles.popupInputSearch}
					type='text'
					placeholder='Поиск...'
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
					viewBox='0 0 24 24'
					className={styles.searchSvg}
				>
					<path
						fill='rgb(92, 99, 112)'
						fillRule='evenodd'
						d='m18.293 19.707-4-4 1.414-1.414 4 4a1 1 0 0 1-1.414 1.414'
						clipRule='evenodd'
					></path>
					<path
						fill='rgb(92, 99, 112)'
						fillRule='evenodd'
						d='M10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0 2a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15'
						clipRule='evenodd'
					></path>
				</svg>
			</div> */}
			<div className={styles.popupBigCity}>
				<Link
					onClick={() => {
						handleNewCity('Москва');
						setActive(false);
					}}
					to={'/moscow'}
				>
					Москва
				</Link>
				<Link
					onClick={() => {
						handleNewCity('Санкт-Петербург');
						setActive(false);
					}}
					to={'/peterburg'}
				>
					Санкт-Петербург
				</Link>
			</div>
		</div>
	);
}

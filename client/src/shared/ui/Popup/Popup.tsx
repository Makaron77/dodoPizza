import React, { useEffect } from 'react';
import styles from './popup.module.scss';
export default function Popup({ active, setActive, children}) {

 useEffect(() => {
		const handleEsc = event => {
			if (event.key === 'Escape') {
				setActive(false);
			}
		};

	
		window.addEventListener('keydown', handleEsc);

	
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
 }, [setActive]);

	return (
		<div
			className={`${styles.modal} ${active ? styles.active : ''}`}
			onClick={() => setActive(false)}
		>
			<div
				className={`${styles.modalContent} ${active ? styles.active : ''}`}
				onClick={e => e.stopPropagation()}
			>{children}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='25'
					fill='none'
					viewBox='0 0 25 25'
					className={styles.close}
					onClick={event => {
						event.stopPropagation();
						setActive(false);
					}}
				>
					<path
						fill='white'
						fillRule='evenodd'
						d='M9.846 12.499.553 3.205A1.878 1.878 0 0 1 3.208.55L12.5 9.843l9.291-9.29a1.878 1.878 0 0 1 2.655 2.655l-9.29 9.29 9.293 9.294a1.878 1.878 0 0 1-2.655 2.655L12.5 15.154 3.205 24.45A1.878 1.878 0 0 1 .55 21.795z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
		</div>
	);
}

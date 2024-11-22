import React, { useState } from 'react'
import styles from './Top.module.scss'
import itemList from '../../model/constants/topMenuItems'
import { Link } from 'react-router-dom';
export default function Top() {
const [activeIndex, setActiveIndex] = useState(null);
const handleClick = index => {
	setActiveIndex(index);
};

	return (
		<article className={styles.top}>
			<div className={styles.contactsItem}>
				{itemList &&
					itemList.map(item => (
						<Link
							key={item.id}
							className={`${styles[item.class]} ${
								activeIndex === item.id ? styles.active : ''
							}`}
							to={item.to}
							onClick={() => handleClick(item.id)}
						>
							{item.label}
						</Link>
					))}
			</div>
		</article>
	);
}

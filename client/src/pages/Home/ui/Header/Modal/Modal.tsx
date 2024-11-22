import Popup from '@/shared/ui/Popup/popup';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchGetCities } from './modalCitiesSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/RTKHooks/useAppDispatchAndUseAppSelector';

export default function Modal({ city, setCity, active, setActive }) {
	const modalRef = useRef(null);
	const dispatch = useAppDispatch();
	const { cities } = useAppSelector(state => state.citiesSlice);
	const [scroll, setScroll] = useState(0);
	const modalMaxScrollRef = useRef(0);
	const location = useLocation(); // Получаем текущий путь
	const navigate = useNavigate();
	
	const handleNewCity = newCity => {
		setCity(newCity);
		sessionStorage.setItem('selectedCity', newCity);
	};

	useEffect(() => {
		const modalElement = modalRef.current;
		if (modalElement) {
			modalElement.addEventListener('scroll', handleScroll);
			return () => {
				modalElement.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	const handleScroll = () => {
		if (modalRef.current) {
			const currentScroll = modalRef.current.scrollTop;
			setScroll(currentScroll);

			modalMaxScrollRef.current =
				modalRef.current.scrollHeight - modalRef.current.clientHeight;
		}
	};

	useEffect(() => {
		dispatch(fetchGetCities());
	}, [active]);
	return (
		<Popup active={active} setActive={setActive}>
			<div className={styles.popupHeader}>
				<div className={styles.popupLogo}></div>
				<h1 className={styles.headerTitle}>1163 пиццерии в 23 странах</h1>
			</div>
			<div className={styles.popupActions}>
				<div className={styles.popupSearch}>
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
				</div>
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
			<div className={styles.popupContent}>
				<div className={styles.popupScroll}>
					<div
						className={`${styles.scrollGradientTop} ${scroll === 0 ? styles.active : ''}`}
					></div>
					<div ref={modalRef} className={styles.popupTable}>
						{cities
							? Array.from({ length: 3 }).map((_, columnIndex) => {
									const itemsPerColumn = Math.ceil(cities.length / 3);
									const start = columnIndex * itemsPerColumn;
									const end = start + itemsPerColumn;

									const groupedCities = cities
										.slice(start, end)
										.reduce((acc, city) => {
											const firstLetter = city.name.charAt(0).toUpperCase();
											if (!acc[firstLetter]) acc[firstLetter] = [];
											acc[firstLetter].push(city);
											return acc;
										}, {});

									return (
										<div key={columnIndex} className={styles.cell}>
											{Object.entries(groupedCities).map(
												([letter, citiesGroup]) => (
													<div key={letter} className={styles.group}>
														<span>{letter}</span>
														{citiesGroup.map(city => {
															const newPath = `/${city.slug}`;

															return (
																<Link
																	onClick={() => {
																		if (location.pathname !== newPath) {
																			handleNewCity(city.name);
																			navigate(newPath, { replace: true });
																			setActive(false);
																		}
																	}}
																	key={city.id}
																	to={newPath}
																>
																	{city.name}
																</Link>
															);
														})}
													</div>
												),
											)}
										</div>
									);
								})
							: 'spinner'}
					</div>
					<div
						className={`${styles.scrollGradientBottom} ${scroll >= modalMaxScrollRef.current ? styles.active : ''}`}
					></div>
				</div>
			</div>
		</Popup>
	);
}

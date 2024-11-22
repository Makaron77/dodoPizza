import Popup from '../../../../../src/shared/ui/Popup/popup';
import Search from './Search/Search';
import Title from './Title/Title';
import styles from './Modal.module.scss';
import { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../hooks/RTKHook/RTKHook';
import { fetchGetCities } from './modalCitiesSlice';
import BigСity from './BigSityList/BigСity';

export default function Modal({ city, setCity, active, setActive }) {
	const modalRef = useRef(null);
	const dispatch = useAppDispatch();
	const { cities } = useAppSelector(state => state.citiesSlice);
	const [searchQuery, setSearchQuery] = useState('');
	const [scroll, setScroll] = useState(0);
	const modalMaxScrollRef = useRef(0);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchGetCities());
	}, [active]);

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

	// Фильтрация городов на основе ввода пользователя
	const filteredCities = cities.filter(city =>
		city.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<Popup active={active} setActive={setActive}>
			<Title />
			<BigСity
				handleNewCity={newCity => setCity(newCity)}
				setActive={setActive}
			/>
			<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<div className={styles.popupContent}>
				<div className={styles.popupScroll}>
					<div
						className={`${styles.scrollGradientTop} ${scroll === 0 ? styles.active : ''}`}
					></div>
					<div ref={modalRef} className={styles.popupTable}>
						{filteredCities.length > 0
							? Array.from({ length: 3 }).map((_, columnIndex) => {
									const itemsPerColumn = Math.ceil(filteredCities.length / 3);
									const start = columnIndex * itemsPerColumn;
									const end = start + itemsPerColumn;

									const groupedCities = filteredCities
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
																			setCity(city.name);
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
							: 'Города не найдены'}
					</div>
					<div
						className={`${styles.scrollGradientBottom} ${scroll >= modalMaxScrollRef.current ? styles.active : ''}`}
					></div>
				</div>
			</div>
		</Popup>
	);
}

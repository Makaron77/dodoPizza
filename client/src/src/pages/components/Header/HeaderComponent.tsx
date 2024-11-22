import React, { react, useEffect, useRef, useState } from 'react';
import styles from './HeaderComponent.module.scss';
import itemList from './headerData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Popup from '../../../shared/ui/Popup/popup';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../shared/hooks/RTKHooks/useAppDispatchAndUseAppSelector';
import { fetchGetCities } from '../../../redux/cities/citiesSlice';

export default function HeaderComponent() {
	const [activeIndex, setActiveIndex] = useState(null);
	const [city, setCity] = useState('Обнинск');
	const [active, setActive] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { cities } = useAppSelector(state => state.citiesSlice);
	const modalRef = useRef(null);
	const [scroll, setScroll] = useState(0);
	const modalMaxScrollRef = useRef(0);
	const location = useLocation(); // Получаем текущий путь
	const navigate = useNavigate();

	const handleScroll = () => {
		if (modalRef.current) {
			const currentScroll = modalRef.current.scrollTop;
			setScroll(currentScroll);

			modalMaxScrollRef.current =
				modalRef.current.scrollHeight - modalRef.current.clientHeight;
		}
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
	const handleNewCity = newCity => {
		setCity(newCity);
		sessionStorage.setItem('selectedCity', newCity);
	};

	const handleClick = index => {
		setActiveIndex(index);
	};
	useEffect(() => {
		const lastPath = localStorage.getItem('lastVisitedPath');
		const savedCity = sessionStorage.getItem('selectedCity');
		if (lastPath) {
			navigate(lastPath);
		}

		if (savedCity) {
			setCity(savedCity);
		}
	}, [navigate]);

	useEffect(() => {
		dispatch(fetchGetCities());
	}, [active]);

	return (
		<section className={styles.container}>
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
			<article className={styles.bottom}>
				<div className={styles.leftBlock}>
					<div className={styles.startLeftBlock}>
						<div className={styles.logo}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 42 42'
								width='42'
								height='42.02'
								fill='none'
							>
								<path
									fill='#FF6900'
									d='M18.77 0c12.206 0 21.59 8.4 21.59 20.868C40.36 33.338 30.976 42 18.77 42H5.053A4.82 4.82 0 0 1 0 36.947V5.25A4.98 4.98 0 0 1 5.054 0z'
								></path>
								<path
									fill='#000'
									d='M32.813 16.34c-.066.526-.657.526-.92.066-.852-1.443-1.968-1.706-3.74-1.837-1.312-.066-2.887.065-4.331.065a.3.3 0 0 1-.294-.151.3.3 0 0 1-.034-.111c.262-1.247 1.312-3.544 2.428-3.74.525-.066 1.706-.197 2.362-.197 3.02 0 4.66 3.478 4.529 5.906M15.75 28.22c2.224.591 4.53.813 6.825.656a18.2 18.2 0 0 0 8.466-2.756c-.985 2.494-4.725 4.069-8.27 4.462 0 .197-.065.329-.065.525 2.26-.09 4.465-.72 6.432-1.837-.657 2.428-3.938 3.412-6.957 3.61a4 4 0 0 1-.262.524c1.486.021 2.968-.178 4.397-.59-1.378 2.559-7.285 4.33-12.272 1.968a15.75 15.75 0 0 0 1.706-6.562m16.472-17.456a5.77 5.77 0 0 0-4.135-1.575c-1.968 0-3.609.525-6.037.59-1.64.066-3.15-3.544-5.119-4.003-.853-1.903-2.822-2.166-4.003-1.181-1.116-.656-2.822-.328-2.887.919-1.247-.394-2.888.262-2.166 1.968-3.084.066-3.61 2.822-1.575 3.085-2.69 1.51-1.444 4.134.788 3.61.393 3.937 2.165 9.055-.722 10.302-.328.131-1.641.46-4.135-.131L0 23.757v2.034c2.166.525 4.331.918 5.71.787 3.806-.393 4.003-3.543 3.806-6.3s-1.116-5.84-.788-8.072l-.131-.13c-1.378 1.443-2.297 1.05-2.428.59-.197-.919 1.444-2.1 2.362-2.494 0-.066.066-.131.066-.197-.853.131-1.903 0-1.969-.59-.066-.722 1.444-1.444 3.413-1.247.065 0 .065-.066.13-.066l-.393-.197c-.525-.262-.656-.722-.46-.984a1.4 1.4 0 0 1 1.182-.46 4.4 4.4 0 0 1 1.772.394c.066 0 .066-.066.131-.066-.131-.13-.328-.262-.394-.393a.5.5 0 0 1 .066-.657 1.37 1.37 0 0 1 1.575.263l.328.328a.24.24 0 0 0 .197-.066.7.7 0 0 1-.197-.459.394.394 0 0 1 .263-.525.8.8 0 0 1 .787.328c.173.264.305.551.394.853a5.45 5.45 0 0 0-4.003 2.035 6.26 6.26 0 0 0-.788 5.381 38.7 38.7 0 0 0 1.903 5.906v.066c1.575 4.528 4.594 15.684-10.04 21.59A6 6 0 0 0 4.922 42h1.51a18.96 18.96 0 0 0 6.496-5.381c6.694 2.953 12.797 1.444 15.422-3.413a6.41 6.41 0 0 0 2.953-4.725 4.91 4.91 0 0 0 .985-4.265c-.066-.263-.329-.263-.722-.066-5.447 3.281-10.238 3.806-15.947 2.1a43 43 0 0 0-.788-5.315c-.131-2.297.59-3.413 4.79-2.035 2.757.722 4.004 1.969 4.988 2.625.46.328 1.05.722 1.378.46.197-.132.263-.526.263-.985a10.9 10.9 0 0 0-1.181-4.134 34 34 0 0 1 3.74 0 2.11 2.11 0 0 1 1.903 1.444c.46 1.312 3.02.984 3.216-.132.394-2.297.525-5.315-1.706-7.415M3.084 30.45a24 24 0 0 0-3.084 0v1.378c1.772-.393 2.888-.59 2.888-.59z'
								></path>
								<path
									fill='#fff'
									d='M19.491 16.078c-2.297-.525-4.856-1.182-6.169-3.15 0-.066-.065-.066-.13-.066a.066.066 0 0 0-.066.066.6.6 0 0 0 .065.328l-.197.065a1.31 1.31 0 0 1-.065-1.575 1.686 1.686 0 0 1 2.165-.196l-.065.196a1.44 1.44 0 0 0-.92.066.354.354 0 0 0-.13.525c1.115 2.1 4.397 2.56 8.268 2.231a.466.466 0 0 0 .525-.393 7.44 7.44 0 0 1 1.838-3.479c-.629.103-1.266.147-1.903.132-1.969.13-3.15-.132-3.478-.394l.065-.197c.197.066.46.066.46 0s0-.131-.066-.197c-.394-.328-2.1-2.1-2.1-2.1-.197-1.51-2.362-1.51-3.216-.065l-.262-.066c.057-.282.168-.55.328-.788a4.115 4.115 0 0 0-3.019 3.544c-.787 6.694 9.385 5.119 12.272 7.81.066.065.197.262.263.13.065-.13-1.182-1.705-4.463-2.427M15.947 8.07c.46-.13 1.182.329 1.51 1.05s.262 1.444-.197 1.641c-.46.197-1.181-.328-1.51-1.05-.065-.131-.065-.197-.13-.328h.065a.43.43 0 0 0 .46.131c.196-.131.13-.394 0-.656-.132-.263-.329-.394-.526-.394l-.065-.065a.87.87 0 0 1 .393-.329M31.041 26.118a18.2 18.2 0 0 1-8.465 2.756c-2.295.12-4.595-.1-6.825-.656q-.001.994-.197 1.969a27.3 27.3 0 0 0 5.84.722 9.8 9.8 0 0 1-2.821 4.987c3.543.132 6.759-1.247 7.743-3.084a13.4 13.4 0 0 1-4.397.59c.066-.196.197-.328.263-.525 3.019-.13 6.3-1.115 6.956-3.609a14.2 14.2 0 0 1-6.431 1.838c0-.197.066-.329.066-.525 3.543-.46 7.284-1.97 8.268-4.463'
								></path>
							</svg>

							<svg
								className={styles.svg2}
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 100 23'
								width='201.11px' //*ширина и высота контейнера svg
								height='23.17px'
								fill='none'
							>
								<path
									fill='#000'
									transform='translate(-49, -10)'
									d='M240.469 22.968c-.92 0-1.841-.13-2.695-.328l2.629-5.84 2.629 5.84c-.854.197-1.709.328-2.563.328m9.268 4.463-6.113-13.388c-.723-1.443-1.643-2.1-3.024-2.1h-.263c-1.446 0-2.366.657-3.089 2.1l-6.113 13.388c-.591 1.312-.197 2.494 1.052 2.953 1.052.46 2.235.066 2.761-.984l.065-.132 1.381-2.887c1.38.46 2.76.656 4.206.656 1.381 0 2.761-.197 4.01-.656l1.314 2.887c.395 1.05 1.578 1.575 2.695 1.182h.066l.132-.066c1.051-.46 1.577-1.706 1.117-2.756-.132-.066-.132-.131-.197-.197m-22.085-1.247h-1.183V13.978c.065-1.181-.921-2.166-2.104-2.232h-.197c-1.183-.065-2.169.854-2.235 2.035V26.25h-7.822V13.978a2.29 2.29 0 0 0-2.431-2.166 2.28 2.28 0 0 0-2.17 2.166v14.437c-.065 1.181.789 2.166 1.972 2.232h13.803v1.968c-.065 1.181.789 2.166 1.972 2.231h.198c1.117.066 2.169-.787 2.234-1.903v-4.396c.132-1.116-.723-2.1-1.774-2.232h-.395m-22.611-.131h-1.183V13.978c.066-1.181-.92-2.166-2.103-2.232h-.132c-1.183 0-2.103.92-2.169 2.1V26.25h-7.821V13.978a2.29 2.29 0 0 0-2.432-2.166 2.28 2.28 0 0 0-2.169 2.166v14.437c-.066 1.181.788 2.166 1.971 2.232h13.804v1.968c-.066 1.181.788 2.166 1.971 2.231h.198c1.117.132 2.169-.721 2.3-1.837v-4.528c.132-1.116-.723-2.1-1.775-2.231h-.394m-25.174-14.307h-.197c-1.315 0-2.235.657-3.155 1.97l-7.362 10.433V14.11a2.187 2.187 0 0 0-2.169-2.166 2.187 2.187 0 0 0-2.169 2.166v13.913c-.066 1.312.854 2.428 2.169 2.493h.591c1.381 0 2.367-.722 3.221-1.968l7.362-10.435v10.172c0 1.181.986 2.166 2.169 2.166a2.187 2.187 0 0 0 2.169-2.166V14.437c.131-1.312-.854-2.428-2.169-2.494zm-21.954 0h-12.62c-1.117-.065-2.169.788-2.235 1.904v14.7c-.065 1.18.921 2.165 2.104 2.23h.197c1.183.066 2.169-.852 2.235-2.034V16.275h8.084v12.272c-.065 1.18.855 2.165 2.038 2.23h.263c1.183.066 2.235-.852 2.301-2.034V14.11c0-1.181-.921-2.166-2.038-2.166zm-32.667 14.57c-2.958 0-5.061-2.232-5.061-5.25 0-2.823 2.3-5.054 5.061-5.054 2.76 0 5.061 2.297 5.061 5.053.066 3.019-2.038 5.25-5.061 5.25m0-14.7a9.34 9.34 0 0 0-9.597 9.121v.394c-.131 5.184 4.01 9.45 9.137 9.515h.394c5.193.066 9.531-4.068 9.597-9.253v-.262c.065-5.119-4.076-9.385-9.203-9.45zM106.841 26.25h-7.427c.526-.985.854-2.035 1.117-3.15.263-1.51.46-3.085.46-4.594l.066-2.166h5.719zm5.653 0h-1.183V14.109c.066-1.181-.789-2.166-1.972-2.231H98.691c-1.249 0-2.038.787-2.038 2.231v2.953a26 26 0 0 1-.394 5.513c-.197 1.312-.723 2.559-1.446 3.675h-.526c-1.117-.066-2.103.721-2.169 1.837v4.528c-.066 1.181.789 2.166 1.972 2.231h.197c1.117.066 2.17-.787 2.235-1.903v-2.231h13.606v1.969c-.066 1.181.789 2.166 1.972 2.231h.197c1.117.066 2.169-.787 2.235-1.903v-4.397c.131-1.05-.592-2.1-1.709-2.231h-.46m-30.302.131c-2.957 0-5.06-2.231-5.06-5.25 0-2.822 2.3-5.053 5.06-5.053a5.06 5.06 0 0 1 5.062 5.053c.065 3.019-1.907 5.25-5.062 5.25m0-14.7a9.337 9.337 0 0 0-9.596 9.122v.394a9.24 9.24 0 0 0 9.136 9.515h.46c5.193.066 9.531-4.068 9.597-9.253v-.262c.066-5.578-4.075-9.516-9.597-9.516M63.591 26.25H56.23c.526-1.05.854-2.1 1.117-3.216.263-1.51.46-3.084.46-4.594l.066-2.165h5.719zm5.653 0h-1.183V14.109c.066-1.181-.789-2.166-1.972-2.231H55.573c-1.25 0-2.038.787-2.038 2.231v2.953a26 26 0 0 1-.394 5.513c-.198 1.312-.723 2.559-1.447 3.675h-.525c-1.118-.066-2.104.721-2.17 1.837v4.528c-.065 1.181.79 2.166 1.972 2.231h.198c1.117.066 2.169-.787 2.235-1.903v-2.231H67.01v1.969c-.066 1.181.788 2.166 1.971 2.231h.198c1.117.066 2.169-.787 2.234-1.903v-4.397c.132-1.115-.723-2.1-1.774-2.231-.132-.197-.263-.197-.395-.131'
								></path>
							</svg>
						</div>
						<div className={styles.bottomBlock}>
							<p>Сеть №1 в России</p>
							<Link
								to={
									'https://docs.google.com/document/d/1OqaMef63wANPbsGCE8RD5QW9ve8Z7QBE/edit'
								}
							>
								по количеству пиццерий
							</Link>
						</div>
					</div>

					<div className={styles.endLeftBlock}>
						<h1 className={styles.headerEndBlock}>
							<span>Доставка пиццы</span>

							<p onClick={() => setActive(!active)}>{city}</p>
						</h1>
						<div className={styles.footerEndBlock}>
							35 мин
							<div className={styles.dotAndTooltip}>
								<div className={styles.dot}></div>
							</div>
							4.3
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='none'
								viewBox='0 0 16 16'
								// class='sc-1824ck7-3 ldYizc'
							>
								<defs>
									<linearGradient id='112d8c58-65bc-44af-9bbe-97e53e3cc587a'>
										<stop offset='50%' stopColor='#FFD200'></stop>
										<stop
											offset='86%'
											stopColor='#999'
											stopOpacity='0.5'
										></stop>
									</linearGradient>
								</defs>
								<path
									transform='translate(-0, 2)'
									fill='url(#112d8c58-65bc-44af-9bbe-97e53e3cc587a)'
									d='M8.451 1.49a1 1 0 0 0-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3 3 0 0 1-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 0 0-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9 9 0 0 0-.145.73c-.024.184-.042.445.087.68a1 1 0 0 0 .733.508c.265.038.504-.072.667-.16a9 9 0 0 0 .632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 0 0 .733-.508c.13-.235.11-.496.087-.68a9 9 0 0 0-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 0 0-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3 3 0 0 1-.184-.018h-.003l-.002-.003a3 3 0 0 1-.069-.172l-.928-2.39a10 10 0 0 0-.296-.713c-.083-.17-.216-.405-.46-.529'
								></path>
							</svg>
						</div>
					</div>
				</div>

				<div className={styles.rightBlock}>
					<Link to={'https://dodopizza.ru/obninsk/loyaltyprogram'}>
						<span className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									fill='#000'
									fillRule='evenodd'
									d='M11 1a1 1 0 0 1 1 1v2a8 8 0 1 1 0 16v2a1 1 0 1 1-2 0v-2H6.6c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44C5.76 4 6.04 4 6.6 4H10V2a1 1 0 0 1 1-1m1 17a6 6 0 0 0 0-12H7v12z'
									clipRule='evenodd'
								></path>
							</svg>
						</span>
						<span className={styles.label}>Додокоины</span>
					</Link>
					<button className={styles.buttonLogin}>Войти</button>
				</div>
			</article>

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
		</section>
	);
}

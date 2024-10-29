'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Cities',
			[
				{
					name: 'Абакан',
					slug: 'abakan',
				},
				{
					name: 'Абинск',
					slug: 'abinsk',
				},
				{
					name: 'Адлер',
					slug: 'adler',
				},
				{
					name: 'Балаково',
					slug: 'balakovo',
				},
				{
					name: 'Балашиха',
					slug: 'balashikha',
				},
				{
					name: 'Белгород',
					slug: 'belgorod',
				},
				{
					name: 'Великий Новгород',
					slug: 'novgorod',
				},
				{
					name: 'Владивосток',
					slug: 'vladivostok',
				},
				{
					name: 'Владимир',
					slug: 'vladimir',
				},
				{
					name: 'Геленджик',
					slug: 'geledshik',
				},
				{
					name: 'Гусь-Хрустальный',
					slug: 'gusHrust',
				},
				{
					name: 'Голицыно',
					slug: 'golicino',
				},
				{
					name: 'Дедовск',
					slug: 'dedovsk',
				},
				{
					name: 'Дзержинск',
					slug: 'dzejinsk',
				},
				{
					name: 'Дмитров',
					slug: 'dmitrov',
				},
				{
					name: 'Ейск',
					slug: 'eysk',
				},
				{
					name: 'Ермолино',
					slug: 'ermolino',
				},
				{
					name: 'Елабуга',
					slug: 'elabuga',
				},
				{
					name: 'Железнодорожный',
					slug: 'jeleznodorojniy',
				},
				{
					name: 'Железногорск',
					slug: 'jeleznogorsk',
				},
				{
					name: 'Жуковский',
					slug: 'jukovskiy',
				},
				{
					name: 'Звенигород',
					slug: 'zvenigorod',
				},
				{
					name: 'Зеленоград',
					slug: 'zelenograd',
				},
				{
					name: 'Зеленокумск',
					slug: 'zelenocumsk',
				},
				{
					name: 'Иваново',
					slug: 'ivanovo',
				},
				{
					name: 'Ижевск',
					slug: 'ijevsk',
				},
				{
					name: 'Иркутск',
					slug: 'irkutsk',
				},
				{
					name: 'Йошкар-Ола',
					slug: 'yoshkarola',
				},
				{
					name: 'Кабардинка',
					slug: 'kabardinka',
				},
				{
					name: 'Калуга',
					slug: 'kaluga',
				},
				{
					name: 'Казань',
					slug: 'kazan',
				},
				{
					name: 'Лабинск',
					slug: 'labinsk',
				},
				{
					name: 'Лесной',
					slug: 'lesnoy',
				},
				{
					name: 'Ленинградская',
					slug: 'leningradskaya',
				},
				{
					name: 'Магадан',
					slug: 'magadan',
				},
				{
					name: 'Малоярославец',
					slug: 'maloyaroslavets',
				},
				{
					name: 'Михайловск',
					slug: 'mikhalovsk',
				},
				{
					name: 'Набережные Челны',
					slug: 'chelni',
				},
				{
					name: 'Наро-Фоминск',
					slug: 'narofominsk',
				},
				{
					name: 'Находка',
					slug: 'nahodka',
				},
				{
					name: 'Обнинск',
					slug: 'obninsk',
				},
				{
					name: 'Одинцово',
					slug: 'odincovo',
				},
				{
					name: 'Омск',
					slug: 'omsk',
				},
				{
					name: 'Павловск',
					slug: 'pavlovsk',
				},
				{
					name: 'Пенза',
					slug: 'penza',
				},
				{
					name: 'Парголово',
					slug: 'pargolovo',
				},
				{
					name: 'Развилка',
					slug: 'razvilka',
				},
				{
					name: 'Реутов',
					slug: 'reutov',
				},
				{
					name: 'Раменское',
					slug: 'ramenskoe',
				},
				{
					name: 'Сальск',
					slug: 'salsk',
				},
				{
					name: 'Самара',
					slug: 'samara',
				},
				{
					name: 'Саратов',
					slug: 'saratov',
				},
				{
					name: 'Таганрог',
					slug: 'taganrog',
				},
				{
					name: 'Тверь',
					slug: 'tver',
				},
				{
					name: 'Тольятти',
					slug: 'tolyatti',
				},
				{
					name: 'Урай',
					slug: 'uray',
				},
				{
					name: 'Уфа',
					slug: 'ufa',
				},
				{
					name: 'Ухта',
					slug: 'uhta',
				},
				{
					name: 'Фрязино',
					slug: 'fryazino',
				},
				{
					name: 'Хабаровск',
					slug: 'habarovsk',
				},
				{
					name: 'Химки',
					slug: 'fryazino',
				},
				{
					name: 'Хотьково',
					slug: 'hotkovo',
				},
				{
					name: 'Чайковский',
					slug: 'chaykovskiy',
				},
				{
					name: 'Чапаевск',
					slug: 'chapaevsk',
				},
				{
					name: 'Челябинск',
					slug: 'chelyabinsk',
				},
				{
					name: 'Шадринск',
					slug: 'shadrinsk',
				},
				{
					name: 'Шахта',
					slug: 'shakhta',
				},
				{
					name: 'Шушары',
					slug: 'shushari',
				},
				{
					name: 'Щёлково',
					slug: 'shelkovo',
				},
				{
					name: 'Щербинка',
					slug: 'sherbonka',
				},
				{
					name: 'Электрогорск',
					slug: 'elektrogorsk',
				},
				{
					name: 'Электросталь',
					slug: 'electrostal',
				},
				{
					name: 'Югорск',
					slug: 'yugorsk',
				},
				{
					name: 'Ярославль',
					slug: 'yaroslavl',
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Cities', null, {});
	},
};

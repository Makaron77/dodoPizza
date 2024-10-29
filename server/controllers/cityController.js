const { City } = require('../db/models'); 

const getAllCities = async (req, res) => {
	try {
		const cities = await City.findAll();


		res.status(200).json(cities);
	} catch (error) {
		console.error('Ошибка при получении городов:', error);
		res
			.status(500)
			.json({ message: 'Ошибка сервера. Пожалуйста, попробуйте позже.' });
	}
};

module.exports = { getAllCities };

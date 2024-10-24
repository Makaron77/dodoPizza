const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(
	cors({
		origin: 'http://localhost:5173',
	}),
);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
	console.log(`Сервер работает на порту ${PORT}`);
});

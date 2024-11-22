import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home';

function App() {


  return (
		<Routes>
			<Route
				path='/'
				element={
					<div>
						<HomePage />
					</div>
				}
			/>
			<Route
				path='/moscow'
				element={
					<div>
						<HomePage />
					</div>
				}
			/>
			<Route
				path='/peterburg'
				element={
					<div>
						<HomePage />
					</div>
				}
			/>
			<Route
				path='/obninsk'
				element={
					<div>
						<HomePage />
					</div>
				}
			/>
		</Routes>
	);
}

export default App

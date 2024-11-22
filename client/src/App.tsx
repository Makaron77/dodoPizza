import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';

function App() {


  return (
		<Routes>
			<Route
				path='/'
				element={
					<div>
						<Home />
					</div>
				}
			/>
			<Route
				path='/moscow'
				element={
					<div>
						<Home />
					</div>
				}
			/>
			<Route
				path='/peterburg'
				element={
					<div>
						<Home />
					</div>
				}
			/>
			<Route
				path='/obninsk'
				element={
					<div>
						<Home />
					</div>
				}
			/>
		</Routes>
	);
}

export default App

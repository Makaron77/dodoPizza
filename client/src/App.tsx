import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';

function App() {


  return (
		<Routes>
			 <Route path='/' element={<div><HomePage/></div>} />
		</Routes>
	);
}

export default App

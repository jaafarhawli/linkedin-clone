import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/Login';

function App() {

  const [path, setPath] = useState('/login');

  const getPath = (type) => {
		switch (type) {
			case '1':
				setPath('/person');
				break;
			case '2':
				setPath('/company');
				break;
		}
	}


  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to={path} />} />
				<Route path='/login' element={<Login onLogin={getPath} />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;

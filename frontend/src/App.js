import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/Login';
import Person from './pages/register/Person';
import Company from './pages/register/Company';
import PersonPage from './pages/person/PersonPage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
	const client = new QueryClient();

  const [path, setPath] = useState('/login');

  const getPath = (type) => {
		switch (type) {
			case '1':
				setPath('/person');
				break;
			case '2':
				setPath('/company');
				break;
			default:
				setPath('/login');
				break;
		}
	}


  return (
	<QueryClientProvider client={client}>
    	<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to={path} />} />
					<Route path='/login' element={<Login onLogin={getPath} />} />
					<Route path='/register/person/*' element={<Person />} />
					<Route path='/register/company/*' element={<Company />} />
					<Route path='/person/*' element={<PersonPage />} />
				</Routes>
    	</BrowserRouter>
	</QueryClientProvider>
  );
}

export default App;

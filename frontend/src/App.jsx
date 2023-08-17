import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/gallery' element={<GalleryPage />} />
			</Routes>
		</>
	);
}

export default App;

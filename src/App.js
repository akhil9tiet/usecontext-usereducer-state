import React from 'react';
import './App.css';
import GlobalStateProvider from './store/GlobalStateProvider';
import { Nav, DownloadImage, LoginNotification } from './components';

function App() {
	return (
		<GlobalStateProvider>
			<div className='App'>
				<header className='App-header'>
					<Nav />
					<p>Download Image</p>
					<DownloadImage />
					<LoginNotification />
				</header>
			</div>
		</GlobalStateProvider>
	);
}

export default App;

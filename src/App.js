import React from 'react';
import './App.css';
import GlobalStateProvider from './store/GlobalStateProvider';

function App() {
  return (
		<GlobalStateProvider>
			<div className='App'>
				<header className='App-header'>
					<p>Test</p>
				</header>
			</div>
		</GlobalStateProvider>
  );
}

export default App;

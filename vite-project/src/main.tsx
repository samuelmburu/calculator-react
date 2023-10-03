import React from 'react';
// eslint-disable-next-line n/file-extension-in-import
import ReactDOM from 'react-dom/client';
import 'virtual:uno.css';
// eslint-disable-next-line import/no-unassigned-import
import 'virtual:unocss-devtools';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

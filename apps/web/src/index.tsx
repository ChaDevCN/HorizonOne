import '@/assets/styles/reset.less';

import { useEffect } from 'react';

import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';
import ReactDOM from 'react-dom/client';

import { useSelector } from './hooks/use-selector';
import RootRouterProvider from './router/provider';
import { useGlobalStore } from './stores/global';
const rootEl = document.getElementById('root');

const App = () => {
	const { darkMode } = useGlobalStore(useSelector(['darkMode']));
	useEffect(() => {
		if (darkMode === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);
	return (
		<ThemeProvider appearance={darkMode}>
			<RootRouterProvider />
		</ThemeProvider>
	);
};

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#7c3aed',
					colorPrimaryBg: '#f8f0ff',
					colorPrimaryBgHover: '#f0e0ff',
					colorPrimaryBorder: '#d9b8ff',
					colorPrimaryBorderHover: '#bf8fff',
					colorPrimaryHover: '#a064fa',
					colorPrimaryActive: '#5b26c7',
					colorPrimaryTextHover: '#a064fa',
					colorPrimaryText: '#7c3aed',
					colorPrimaryTextActive: '#5b26c7'
				}
			}}
		>
			<App />
		</ConfigProvider>
	);
}

import * as path from 'path';

import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';
const rootDirname = path.resolve(__dirname, '../../');
export default defineConfig({
	plugins: [pluginReact(), pluginLess()],
	resolve: {
		alias: {
			'@app/css': path.resolve(rootDirname, './libs/assets/styles'),
			'@': path.resolve(__dirname, './src')
		}
	},
	html: {
		template: './static/index.html'
	}
});

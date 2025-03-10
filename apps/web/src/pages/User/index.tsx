import { useMemo, useState } from 'react';

import { ClientSideRowModelModule, themeQuartz } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import './index.css';

const myTheme = themeQuartz.withParams({
	spacing: 12,
	accentColor: '#7c3aed'
});

const User = () => {
	// 行数据
	const [rowData, setRowData] = useState([
		{ make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
		{ make: 'Ford', model: 'F-Series', price: 33850, electric: false },
		{ make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
		{ make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
		{ make: 'Ford', model: 'F-Series', price: 33850, electric: false },
		{ make: 'Toyota', model: 'Corolla', price: 29600, electric: false }
	]);

	// 列定义
	const [colDefs, setColDefs] = useState([
		{ field: 'make', headerName: 'Make' },
		{ field: 'model', headerName: 'Model' },
		{ field: 'price', headerName: 'Price' },
		{ field: 'electric', headerName: 'Electric' }
	]);
	const getRowClass = (params) => {
		if (params.node.rowIndex % 2 === 0) {
			return 'my-shaded-effect';
		}
	};

	const theme = useMemo(() => {
		return myTheme;
	}, []);

	return (
		<div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
			<AgGridReact
				rowData={rowData} // 设置数据
				columnDefs={colDefs} // 设置列定义
				modules={[ClientSideRowModelModule]}
				domLayout="autoHeight" // 自适应高度
				pagination={true} // 启用分页
				paginationPageSize={5} // 设置分页大小
				getRowClass={getRowClass}
				rowClass={'my-green-class'}
				theme={theme}
			/>
		</div>
	);
};

export default User;

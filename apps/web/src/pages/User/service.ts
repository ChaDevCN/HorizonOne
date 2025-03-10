export interface Menu {
	id: string;
	parentId?: string;
	title?: string;
	icon?: string;
	type?: number;
	route?: string;
	filePath?: string;
	orderNumber?: number;
	url?: string;
	show?: boolean;
	children?: Menu[];
	path: string;
	parentPaths?: string[];
	authCode?: string;
	curVersion?: string;
}

export interface User {
	id: number;
	userName: string;
	nickName: string;
	phoneNumber: string;
	email: string;
	createDate: string;
	updateDate: string;
	avatar?: string | null;
	menus: Menu[];
	flatMenus: Menu[];
	avatarPath: string;
	authList: string[];
}

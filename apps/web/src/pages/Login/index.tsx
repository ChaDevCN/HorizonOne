import React, { useState } from 'react';

import { Button, Divider, Form, Input, message as Message } from 'antd';

import iconGoogle from '@/assets/icon/google.svg';
import loginImg from '@/assets/images/login_bg.svg';
import loginLeft from '@/assets/images/login_left.png';
import { type FieldType } from '@/types';
import './index.less';

const App: React.FC = () => {
	const onFinish = () => {};
	const loading = false;
	return (
		<div
			className={`w-full h-screen  flex items-center justify-center overflow-x-hidden bg-[#eee] bg-no-repeat bg-center bg-cover login-page`}
			style={{ backgroundImage: `url(${loginImg})` }}
		>
			<div className="login-box">
				<div className="login-left  lg:block hidden lg:w-[750px]">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<Form
						disabled={loading}
						name="basic"
						onFinish={onFinish}
						autoComplete="off"
						className="mt-[30px]"
						labelCol={{ span: 6 }}
					>
						<Form.Item<FieldType>
							label="用户名"
							name="username"
							rules={[{ required: true, message: '请输入用户名' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item<FieldType>
							label="密码"
							name="password"
							rules={[{ required: true, message: '请输入密码' }]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className=" w-full uppercase"
								loading={loading}
							>
								登录
							</Button>
						</Form.Item>
					</Form>
					<Divider plain>其他方式登录</Divider>
					<div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 py-2 rounded-lg">
						<img src={iconGoogle} alt="google-login" />
						<span>Google</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

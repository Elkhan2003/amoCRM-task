// const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
const cors_proxy = 'https://corsproxy.io/?';
const subdomain = 'hotbox2000';

const amoCRM_key = {
	AMOCRM_CLIENT_SECRET:
		'8yUzLI2uPsKgM7IkJIz3wjrA9gOtiM6QDqV5cIJN6oRqpvX5UDIdvfjTi7hVvkCY',
	AMOCRM_CLIENT_ID: 'feee39db-14a3-4068-975b-1526bf3eb910',
	AMOCRM_CODE:
		'def50200f7cc47e3a7cad55faf0d73a02486b85b499ef8ba1d2acd643fd29074d233ad38d54fe071e122fef5604a55d11288d575f64e26afbf65a05db752a04424634b12a37a068daa9c6272fad99cf101cd1c6a2c50b0f5c9b10fba7ab743de28705b9a99eb4b8316a7aac64c8db8f4860f79a34cc23146f79347b9247640e0d498756d59bd62dc78df85697e2c22067b3b6fdb8e32f2b8f16868518ffd92f00f417a439839d32fee439d1230d5749afa9b1236c31137f8b022c4d63d49608ce70112d6954acfbf2a8dd20c9aa54a7eb3f88c0c53168e36a36227c42f8fb01d6cb1027138f9687e0bef9984bb220cfa5de93780d3e174cfd748c30c74be448935d9ae4ce57132b76591e27b74695a08979a498704bf75e6191eab368917662950cc35f6f1abb632777e3abc29052a2e7403998c7b3ebf23d329b5611d8cd839efa3edb9da6132925945488c9ca6ea5843924fe2f21973f539a86275ba38dc35534e37b44d1c8b2172b4cf4293c9ba58bf48e9672953f4e9e542eb2c53bb4c3926e2b55dae3dc5758e12ff3a0a968e346967e5646827a89957bdfe0dcb035d555533bfa93c4cc6488c76d6818167b1223af35ef7b4649ec34b5a62aa610d0abe779cc8834049d9ef9ebaee1919f762f6c060edd1d08c681743906674c4440e70e24c6900d041af',
	AMOCRM_REDIRECT_URI: 'https://localhost:3000'
};

const access_token = {
	accessToken:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2ZDdmM2I4MDg2NjcxNzM5YzBjMWUwNzI1ZjlmODYzNTg1ZTBiYjFjMGQyNWQ4YTlhMWM1ZTMyOWVkMmVhZTlmNzk4ODk5NzgxNTU2ZWNmIn0.eyJhdWQiOiJmZWVlMzlkYi0xNGEzLTQwNjgtOTc1Yi0xNTI2YmYzZWI5MTAiLCJqdGkiOiI0NmQ3ZjNiODA4NjY3MTczOWMwYzFlMDcyNWY5Zjg2MzU4NWUwYmIxYzBkMjVkOGE5YTFjNWUzMjllZDJlYWU5Zjc5ODg5OTc4MTU1NmVjZiIsImlhdCI6MTcwODgwMzk3NCwibmJmIjoxNzA4ODAzOTc0LCJleHAiOjE3MDg4OTAzNzQsInN1YiI6IjEwNzE4Mjk4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTkxMjk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMjYzYTFjZTgtN2UwOS00OTgyLThlZTAtODAyNzEzY2FiZDE2In0.C2t6-u2WIM5FBv97w_BSzOm6x-kHJ_GX35zHggUd7enYYf177ZwmtrrHVImIGTOr2FEmvvrgH9Zx6MVU07qoo51PuqwxJNiCuuz3MUXxlAjnQ3QETDCwxFnjuXXK_kkVWhW_z-Pf1upo_zJPwmYWSJPstT_U1r-1jNmbNLtBhfqgOJhyeW961joaZdvz14kkvc2lEO4YUDiDj4KboCIXLtB38vAByLFUeoYHrwpikxvWu-b9BWW_DnG3VXGodGOK8vPZN-ewesmHcrukgg045xEDW-AnSJfEvxT6rJDzV35PRxVsaC38_jgUVZnPeJFpnwyDRXL1jIxvd3GFxy4_lw',
	expiresIn: 86400,
	refreshToken:
		'def50200970ea856657fca8d348969262c4f31f1f0ef0e3901b52996676d51118aeb43d1d9de799a0a13d03445dc6927943115c647d88d118efc1aeab3b5afeffdfdf05cf371e32316860cfd0e4156617cf06f1b6cf411924ec4cb2bcda71f5493cc09a731a5b69705352a90e8924f4317dddcf9114226e7187bbd49f84a7f67c309e54688bd6d46451090399a18c1cf00407d9205bd2a79ef022cad25664578496e44b26117b5ee884269e293346539c136efff3099e5b4a9cbfaa3b58e0aed2627873351defeae07801253ebf77f827d34aacd823bc0111dfb08bbbe2719b78949179872cf15b4e0a970bcf5b51332f6f84b19f82bd97337a68be988fbed74ca63f9d0802ace3867b8282149f52d1b8be32b51f53a85eecafd07fe3fddba5b585e340358d0b6974b6e05521018b01baac403fae8da0580f02e86501001af77c8fefa2d6b02f310ed77c5e22d6cbf82cfcec9aca05ec39cec6c8ed323d5adc93bd4f7a99f8ca8cf99a1e6020ace9c01baea5877417ad50e97a285012c00fa593b7f0f63e7bbe0d8db1bbbbbeca4106f1848c5b40ec571083220963a3b08e93680e879794eb7fbd348dc66e323783edbce68c8de8fe1409d4399ff1be18bedb2030bd57bfa8d550d8e469a6dcb6a33ca73aad953214df0fc9d5c60fc6e1d526b96e8edade196ed6c6d6ff8b590f2',
	tokenType: 'Bearer'
};

const exchangeCodeForTokens = async () => {
	const requestBody = {
		client_id: amoCRM_key.AMOCRM_CLIENT_ID,
		client_secret: amoCRM_key.AMOCRM_CLIENT_SECRET,
		grant_type: 'authorization_code',
		code: amoCRM_key.AMOCRM_CODE,
		redirect_uri: amoCRM_key.AMOCRM_REDIRECT_URI
	};

	try {
		const response = await fetch(
			`${cors_proxy}https://${subdomain}.amocrm.ru/oauth2/access_token`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			}
		);

		if (!response.ok) {
			throw new Error('Failed to exchange code for tokens');
		}

		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error('Error exchanging code for tokens:', error.message);
		return null;
	}
};

(async () => {
	try {
		const tokens = await exchangeCodeForTokens();
		console.log(tokens);
		if (tokens) {
			console.log('Access Token:', tokens.access_token);
			console.log('Refresh Token:', tokens.refresh_token);
		} else {
			console.log('Failed to exchange code for tokens');
		}
	} catch (error) {
		console.error('Error:', error);
	}
})();

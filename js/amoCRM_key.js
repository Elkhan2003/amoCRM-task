// const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
const corsProxy = 'https://corsproxy.io/?';
const subdomain = 'hotbox2000';

const amoCRMCredentials = {
	AMOCRM_CLIENT_ID: 'feee39db-14a3-4068-975b-1526bf3eb910',
	AMOCRM_CLIENT_SECRET:
		'8yUzLI2uPsKgM7IkJIz3wjrA9gOtiM6QDqV5cIJN6oRqpvX5UDIdvfjTi7hVvkCY',
	AMOCRM_CODE:
		'def50200e4994ee4872051a341256765ff0052677399d2b1930819662283611aaddc374ad7d6670aa0302e06994aacddcb69b71f8ed15ad3db2a12e1fbc592506a59e4f94fdb041c32872fe30b7a101604561baff0dd97a38ae2ebaec25d234336ee6a92736728b398cc2e7abd3152aa3b3c8e5e8955439c73814865aa5dd0293c7e1a6a5c10c62aef559af209403fe4fcf02cb5afbd594e00a80e41cf529070cf83a53902bd3eb27dd1a07609c20c0674d99caa936ddf7713727bca028f28a3c603475639a3c8e39f1e525a2f0506b6f6648be06fa4d82c5a3b1bfa18c8d7dfeb63e0e7a74828b3c83ea980cc67af70bbf7f2ce6df7b8c67eed88b8322499a98c431aa60433d51c80287772f60f0440ac1eb4150190529e2ace85e16ff9d8a0bc4417f1a10f6a333209debb859e536e7e3b229134bce3a79b0fea83cf13e81418ed781e8309b22fc2ee4b1c8b6a27a9bddfd574f096784feb7671a6d42ee791ae85e5b96fced166f7f6c25bdd67818dce66d59d49675ea6dd266a89c4b6f9c1737e635fcdc09145b1836c8b7f1e912eb3683f26466c8ca5505e16d53dfe55000953d317d3262c972a3b8574454e49c84f491a8ec373fc16177d1f88c0ae07954857464bf6902fd9b8367ebe8926f106b5948c0a4a9a37f373c76031cf25363d92560a39359e32',
	AMOCRM_REDIRECT_URI: 'https://localhost:3000'
};

const token = {
	accessToken:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkMTE0MWZlM2U2ZWE2ODlmYzgyNTgwOWZjNDAxMWQxY2RhY2FlYjcyMTRkN2EyNDdmODQ3YzNmNzBmOWZjMzMwY2VlZGQ1Zjg2ZmFjZGJkIn0.eyJhdWQiOiJmZWVlMzlkYi0xNGEzLTQwNjgtOTc1Yi0xNTI2YmYzZWI5MTAiLCJqdGkiOiI4ZDExNDFmZTNlNmVhNjg5ZmM4MjU4MDlmYzQwMTFkMWNkYWNhZWI3MjE0ZDdhMjQ3Zjg0N2MzZjcwZjlmYzMzMGNlZWRkNWY4NmZhY2RiZCIsImlhdCI6MTcwODgyNjQwNSwibmJmIjoxNzA4ODI2NDA1LCJleHAiOjE3MDg5MTI4MDUsInN1YiI6IjEwNzE4Mjk4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTkxMjk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDE2MDA0ZTgtOGY3Yy00MjRlLWJjMzMtZTY2MTVmZTkzODFkIn0.kK8CAjupZr9ekChFboZ-Ua12Zzum0D08ZQ0M6gOiJk01zMOk6lJYvqMuxI3AdWTxzvWALF_KZxXCbNxC9UzVOu0w0KfAIMe2NABf_kimfvL9t3Tjm2bdI9VhQGwKiY1uFB_6DY2Y32WFzVmecL2b283KnsOELt9xQ9cvlIy-eYF3h2Ix6RYs7Da63C0tlkDQE9BvTS_OeJYXnfhHdQeiOMSlVeOSexz_izc9JCYo6lnRpBiHVZ7BSSb5CXiYJzkvgmPtO7hCcjKePE58AuqqzYATTG1055JGvw_3EiRmJRqzSTrwvTEVKrt1gtJt4S_-jQJR3aOYXo49VtEqCrrJQQ',
	expiresIn: 86400,
	refreshToken:
		'def502002e15c7268354f33ced48d5fd2c7ac6ba1589dd7b6959c0b12470559052de7fc1c1bcc06a5f2392276b4afe7eb4022f3a6681441e49125e9a457f1a06aca27c51b97a681693317960dbac5487b66543b3f7eddb4011db08562e3e45bee18a0c8545b09738c127dda232167443507fd2b6603d6fc08fb25d7138e210ca7c233d93ff244396388e362e832d319e0d9fa1cd4a4b199b9fb21470c13cff6115f5c64313ff3e55e582e4e73c485d93c57a538095c945aac84b6cf2372e2c13c771ba2aabf42197865b11ca1381123c73dc0e742e04a90b67245b8272f83bb3d37e9484ccb95caeb91cc909552f6d729cda8256efa22d331c2636a965683eded2d736513bdb0e9e21c92dfd3dd148065ee8df97e2e48c66149773ed9fe8caf64b9e47c58ef509580b049b812349cd9bc8a0848f3ee45209372d22e32f84e56667f2567ef8f51513b67fd7a77efa3aef0ec7612de19482b204d775b4b8190c570867839b6606e4aadd39466f4627dc9c0dfa695bb109d78cd22a0e1d88d427e29b9ef86372f898e7d21a575e266ba2666c9d69afe4ffbcd5d257f195fdd81ed3043a5993c06e3e17f9ca64b5d7072986e6a4531c47d295f971a02de9fe1faead14efc7ec4e01a97572b70f7d44e5e63dfdd3ae27e32ba52980a80b677d4e7edaf915d53b09562e208be75fab77ae',
	tokenType: 'Bearer'
};

// ! authorization
// const exchangeCodeForTokens = async () => {
// 	const {
// 		AMOCRM_CLIENT_ID,
// 		AMOCRM_CLIENT_SECRET,
// 		AMOCRM_CODE,
// 		AMOCRM_REDIRECT_URI
// 	} = amoCRMCredentials;

// 	const requestBody = {
// 		client_id: AMOCRM_CLIENT_ID,
// 		client_secret: AMOCRM_CLIENT_SECRET,
// 		grant_type: 'authorization_code',
// 		code: AMOCRM_CODE,
// 		redirect_uri: AMOCRM_REDIRECT_URI
// 	};

// 	try {
// 		const response = await fetch(
// 			`${corsProxy}https://${subdomain}.amocrm.ru/oauth2/access_token`,
// 			{
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(requestBody)
// 			}
// 		);

// 		if (!response.ok) {
// 			throw new Error('Failed to exchange code for tokens');
// 		}

// 		const responseData = await response.json();
// 		return responseData;
// 	} catch (error) {
// 		console.error('Error exchanging code for tokens:', error.message);
// 		return null;
// 	}
// };

// (async () => {
// 	try {
// 		const tokens = await exchangeCodeForTokens();
// 		if (tokens && tokens.access_token && tokens.refresh_token) {
// 			console.log('Access Token:', tokens.access_token);
// 			console.log('Refresh Token:', tokens.refresh_token);
// 		} else {
// 			console.log('Failed to exchange code for tokens');
// 		}
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// })();

// ! refresh token
const refreshTokenFunc = async (refreshToken) => {
	const { AMOCRM_CLIENT_ID, AMOCRM_CLIENT_SECRET, AMOCRM_REDIRECT_URI } =
		amoCRMCredentials;

	const requestBody = {
		client_id: AMOCRM_CLIENT_ID,
		client_secret: AMOCRM_CLIENT_SECRET,
		grant_type: 'refresh_token',
		refresh_token: refreshToken,
		redirect_uri: AMOCRM_REDIRECT_URI
	};

	try {
		const response = await fetch(
			`${corsProxy}https://${subdomain}.amocrm.ru/oauth2/access_token`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			}
		);

		if (!response.ok) {
			throw new Error('Failed to refresh access token');
		}

		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error('Error refreshing access token:', error.message);
		return null;
	}
};

(async () => {
	try {
		const { refreshToken } = token;
		const refreshedTokens = await refreshTokenFunc(refreshToken);
		if (refreshedTokens && refreshedTokens.access_token) {
			console.log('Refreshed Access Token:', refreshedTokens.access_token);
			console.log('New Refresh Token:', refreshedTokens.refresh_token);
		} else {
			console.log('Failed to refresh access token');
		}
	} catch (error) {
		console.error('Error:', error);
	}
})();

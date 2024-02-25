// const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
const corsProxy = 'https://corsproxy.io/?';
const subdomain = 'hotbox2000';

const amoCRMCredentials = {
	AMOCRM_CLIENT_ID: 'feee39db-14a3-4068-975b-1526bf3eb910',
	AMOCRM_CLIENT_SECRET:
		'8yUzLI2uPsKgM7IkJIz3wjrA9gOtiM6QDqV5cIJN6oRqpvX5UDIdvfjTi7hVvkCY',
	AMOCRM_CODE: 'code',
	AMOCRM_REDIRECT_URI: 'https://localhost:3000'
};

const token = {
	accessToken:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxYzk5Zjc5ODQxZjNkNWQyZTJjY2ZmYzFiMmMxZTQwZDc1MjRjMjM2ODUxOGViY2Q5NGNlMzYwZjFhZjU3NDA5OWZiZWJiNjlkMGQ0ZjJkIn0.eyJhdWQiOiJmZWVlMzlkYi0xNGEzLTQwNjgtOTc1Yi0xNTI2YmYzZWI5MTAiLCJqdGkiOiI2MWM5OWY3OTg0MWYzZDVkMmUyY2NmZmMxYjJjMWU0MGQ3NTI0YzIzNjg1MThlYmNkOTRjZTM2MGYxYWY1NzQwOTlmYmViYjY5ZDBkNGYyZCIsImlhdCI6MTcwODg0NDU5MiwibmJmIjoxNzA4ODQ0NTkyLCJleHAiOjE3MDg5MzA5OTIsInN1YiI6Ijk3OTM3NzQiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzE1OTEyOTQsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIxMWY1YmJkYi0wMDlkLTRjNWYtOGE4ZC1hZDYzYzYxZjJkMGUifQ.Z-ZY7u7aZgzKNS_tw99q0I8iufPAeRzjbi5XID9lF7kkKcYMsvj64oap3vTqt8DiUwNXjW9kOtMKEPmbML-DH-oS3LPhMRQx0bPUWRuhu8VzC4q7S5Lr77jAz3f3Etz-1OTTrTUQnuupOMt_5gdpsX9xvBur1K2f1IPlruF9bcYegrALnNl1lYrxD5FtSGIjXsGCoV3sglNyxZnUrbOf0fBQaZ3Oo4edq8z52uSgXSdEqwGWqkTHRJyR3ZXSDUXH5FbHkNylSBiHWnTypqQ-inG3W4BNrAKZndu1vF3n4RKjKLAI4qC8NLxt0EUx98cHD8SNQio8N48dReJD9sfGPg',
	expiresIn: 86400,
	refreshToken:
		'def502003c8e0a47d7939658407486f535d3074f0ed021fc7f05a1fdc85872be688cbfe8bc866f96aa9cb35eacece350570d350888c84a97fbfa8bf40af301b6f5563c8eba5012eebe15fa7a8529477002521639d39749d4332d80f59c3708b7a3d179cca5ec970ae3d608454b591febd0beb761d641d03a222d20463897fe2c79b850a2e468d1dc80edc1ec437fa6a3e6692c4cf1ccad0b71c02e69666ea8cf7dbf5de1b5b7114acfdea92bb756a5b379906b061a3307d93db104b9d194cf40cbcbad79ce12f51ebf0ca0cfc3aaccac366ea86f42c6ba36d530f69e07f341054354e8694ef0405c384829c1bcff2b22dff95e9959c62133a16b78ea1d464ee4f69de5a8b6d45b36ff504ac9ec9b2eb0908a2db243e4053a8cf2629e704a4d59c8ccf2f625cc80cdf8813cfeb975d8fd396c2030599a530fbd08efca8d38ca26605a1a8f2c859a7181e10fe1b9e369834cbce2fe5a02387fa25d175dccb7c65e9fdbd50fbedf1d48afe0228c3ed035ea59958018203adbee7079a5fbdc054a82fb3b0339f9a5f1ce735e6c2fda115fbfbdae6d33b79b1989f614f27ee3ea56e472a082925630a8054b8445c2b1713e420aff790f616daa8df50f9abb1b0bdf001d6890a30b1a53cd4dcf49a618570e8d63309dcf633d01a2ae7b0eb89867e54e4536dd6c79f54028ddf617cc9d',
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
// const refreshTokenFunc = async (refreshToken) => {
// 	const { AMOCRM_CLIENT_ID, AMOCRM_CLIENT_SECRET, AMOCRM_REDIRECT_URI } =
// 		amoCRMCredentials;

// 	const requestBody = {
// 		client_id: AMOCRM_CLIENT_ID,
// 		client_secret: AMOCRM_CLIENT_SECRET,
// 		grant_type: 'refresh_token',
// 		refresh_token: refreshToken,
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
// 			throw new Error('Failed to refresh access token');
// 		}

// 		const responseData = await response.json();
// 		return responseData;
// 	} catch (error) {
// 		console.error('Error refreshing access token:', error.message);
// 		return null;
// 	}
// };

// (async () => {
// 	try {
// 		const { refreshToken } = token;
// 		const refreshedTokens = await refreshTokenFunc(refreshToken);
// 		if (refreshedTokens && refreshedTokens.access_token) {
// 			console.log('Refreshed Access Token:', refreshedTokens.access_token);
// 			console.log('New Refresh Token:', refreshedTokens.refresh_token);
// 		} else {
// 			console.log('Failed to refresh access token');
// 		}
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// })();

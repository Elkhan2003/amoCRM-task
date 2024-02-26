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
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNiMDNhMTMxY2U5NWE4YTkzODcyMTIxNzgxZTg2OTAwYTA3NWQ2ZGI1NWEyMGE1ZmI1YzdmMWExZWRjODg1YjY4NDY0ODgzZTg5NDVjZGIzIn0.eyJhdWQiOiJmZWVlMzlkYi0xNGEzLTQwNjgtOTc1Yi0xNTI2YmYzZWI5MTAiLCJqdGkiOiIzYjAzYTEzMWNlOTVhOGE5Mzg3MjEyMTc4MWU4NjkwMGEwNzVkNmRiNTVhMjBhNWZiNWM3ZjFhMWVkYzg4NWI2ODQ2NDg4M2U4OTQ1Y2RiMyIsImlhdCI6MTcwODk3Mzg3MywibmJmIjoxNzA4OTczODczLCJleHAiOjE3MDkwNjAyNzMsInN1YiI6Ijk3OTM3NzQiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzE1OTEyOTQsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiJiYjM0YjI4MS02NzJjLTRmYWEtYmMzZi04MjczNmEwYjdlZGEifQ.XEiWEWmkD4Q5eovmjFhU3xfAuCunbBUgJHBFno7PaL-mPeOj5ap0zY3PG8Djl8pcyw4jC0fQvWLHtwWGu7SBf0U9O_U3lL0ur_Dt1JowJ4Ol05dcrMg-gtIUlvURt0XXbM9g3ukeAJCsVSgioLkop-aZMaqdkJYrWvmxfZjpGIMKBLV-uDLevJeX5IVh2dVGgDfmw1RYRv4KwTnhuZln1AnSlijr1QPt9auEZ5Sqj8DYAwbNlcyMvju2AbBp4MFY1BZuKZ_XxSgb0NNL-XTckhBDn3-edscx1zrVWDG45yqnndDyPKZJ68F9svTTtaeNoi99f9ujP90VbWnErtcIeQ',
	expiresIn: 86400,
	refreshToken:
		'def502007cce4850d6875558141d16bab9d7dcd80212925bde43638d930fae79ef05069f517f45b411166801b15af46b302bc5569d89721d714f9c7de2245ec8e82c51ac253066ec0177680fb7f178008641e5776b68e509f47e14f37a3446bd5893f1130b10284f058948f1f8c06464f79ae95bd63afe1ced572d94fedbcbce319cf182f4a329fab6b27f3f1f29169328d0465716f4c1d868dde2bf63eae97dff1571f3a37e5c9f485e5dc7eda461e4df0b97269e9784218e1d8ace45decba747118574939cabe8e4b7467c033a5dd3f332ec0b401389530505765bc44e6d9a4509be3cc15c85bc0d6920d8d35c5c37c2fe8d028b06b228211913029427de1511bff06c764f13efa6816b364dc64703a40cd5fc2f88ebd3212fad26299dc916f40b8d3cf9b6d65c19c9236b0a8000afe1db5311ae2d9c6f26c6fdfa84dc553b0cf0cf3dfde24bf9e1b25db3e8761dbd5d382670b0bfda9c7121893ec990f772d3235e67810a68a15bf4b4627f2eabc29eab8e1cb83ae0a2ed8ae8e57ceb075a4e12d96ffebfc78c06a2dc04a07a921bb643be280dc7a141e7e35692e495635db81c1bd54f8e613aec7524a3ef6bcb07a906e5b35ab542e5eac4da2093ee0da97200da35b415d528d09ae76aa113d4f72ed0ebf13c11de463f95c26b204fff68c3324b931e5f070f5974b3453a',
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

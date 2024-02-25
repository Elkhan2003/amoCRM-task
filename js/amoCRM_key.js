// const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
const corsProxy = 'https://corsproxy.io/?';
const subdomain = 'hotbox2000';

const amoCRMCredentials = {
	AMOCRM_CLIENT_ID: 'feee39db-14a3-4068-975b-1526bf3eb910',
	AMOCRM_CLIENT_SECRET:
		'8yUzLI2uPsKgM7IkJIz3wjrA9gOtiM6QDqV5cIJN6oRqpvX5UDIdvfjTi7hVvkCY',
	AMOCRM_CODE:
		'def50200c9aa91720707527b2eaa199182257b957c4e53d17fa3ea8a318b6afb429b4850b989e718fb7e2750caee1ab206a6d63750354be707671b54f03690b50e89c6f6421b500200fcdd3867821c638ca3281c799c110bc21db79dc59c1f1d5f2061028913032283c9fb554957b7383f9de6cb09143f5aa167b6bab7e371491ff7b73747695d8ecf0c60f69b810ea8cb9f5230e36e95bcb1db5fa159a253e871dd344e0580959c8d344a9d273e8ffe990f8afc360c256fca21992479707dc61b2d7b2ab62b7a838acc94f21f02c972eabde3c1dd2271ebdef4a39015a261ff0af6db1f4bfc4faf716f7d4b76b6dc3188c2a811cb73e834ced66f0c4f4f5dc4b97a2d5a56ccb1b782eb508e70e773770ae43c71a08c1d56617138019d83484fc11db7a868ef91da0f691f252dc2178a3f15eb8605393b8eff6aaaec1fcabc3f130b7b62bc6f242397616228807ee53c775f76224e1a9456234d427aba7d0b1ecc2ccc03f0a931e161fb4a6f2dad5605fb17b59b25a6ff816692e43382ea470d0ef7da590fe50c93ace5971aaf1212e1e4b35a3cb031aa762d3953d45c3d01aac8af26e98808eccfc4379285fa9ce3b1e90fee8a59f023a358d5186550dc29b6d7d42208728c94b7f79b63eebd2cbf6aeb0c58cf02eefa31642579eb07f01c1af5718e2a59e638',
	AMOCRM_REDIRECT_URI: 'https://localhost:3000'
};

const token = {
	accessToken:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUyYzVkY2FhY2YwYWJhYmZmM2ZhMzZhNjBmMTJlMjdjZTZiNGM5NWIxMDc0OWI3NGM4ZmRkOGQwZjYwMGRmZjYxZGQ0OTJlYjM4ZDQxNGMzIn0.eyJhdWQiOiJmZWVlMzlkYi0xNGEzLTQwNjgtOTc1Yi0xNTI2YmYzZWI5MTAiLCJqdGkiOiI1MmM1ZGNhYWNmMGFiYWJmZjNmYTM2YTYwZjEyZTI3Y2U2YjRjOTViMTA3NDliNzRjOGZkZDhkMGY2MDBkZmY2MWRkNDkyZWIzOGQ0MTRjMyIsImlhdCI6MTcwODgyNTQ4NywibmJmIjoxNzA4ODI1NDg3LCJleHAiOjE3MDg5MTE4ODcsInN1YiI6IjEwNzE4Mjk4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTkxMjk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNDdkZTEyNTUtZWZmNy00YzJjLWIxMDItMDBlZDA5NGVlODUwIn0.T495rK1HmcPRfXtTELEQ2yeSVQbuN27NCUgtddHh9S8bM66SpXV9PLpGZojPVKFFkXcmJNSUJh_CiDi7ThEG2M2lFVndSSmPD1SI_dJk6pcnOY8NMUbZWFq1AX7SWT1eetE2xqrCcaBJF8Sy4hx4r8Hf8j6-dOCNLRZc_-OgGVrp1hLOU_gCZvYAfk4KpVuiWRKnjdT_LUbC2Pk_zaLWbyLLwHQ8-oHsJDwfVM7LesWdj-5MP3gyfEpK0liH-Cymk-w8m5WZNvKynPLOLan_-78NTzFuFJFOcAW2BrsY-KD0loBUmhc_1qg7d4E9u3ZyyeJ3VEP70H6f_FnSdbNoKA',
	expiresIn: 86400,
	refreshToken:
		'def50200e91d129328c566b64b2caff08a0ac8b624bc480e3e9edde7f7de8a3bf6d63f87834ea9d5fe654916f8cb279934801b3c16007bc4cb8b0aef28eb799ba01926a1b18c1ea1fbecd05d22d66d63614aa9683822bcf07ee8fee538cc712e0bd5917aab2e6204a2421afe0ae5f2bc5c81d6324c93f3990f69419ec8c713567650fdba26b94878ad550cfa0d2e7cc24dff04921f89550bee2590049b1b6d555b31d0e86718cf0802459fbdbe574aba73ea61131bc217a9cc29a69f6be4a1b6ba8ba9de9af3b16ebceef75af7f622765c55da3923ef5135cb2bc5fd540f089d9372afc8bcaded150848fe2266b8bf5b2086755ece25094d13803bfbb3e3cbca6bd1d5fdfcc5949b7756ff5da1655ddb24979e79ced3f0773aabc33936330815095f187c6b8aa8a3c7dad3823037134cca8dc8a412631701398824e0663377e1fe572ab15a4d660051c1a0ae4edb278e40083af74161f1ba4a6c1fc70129fc408d208cf51a50a45e4a4c980185ad52a40760584b875a2b2f9d1b6a1d756a0c2c99044e65f19cb9dfd19bccab692db025a24812f51b4f0160dfb3aaf3349f3e0c603cb4ee0d7734eb2ca2374f47ee4363666f3772dc59abf201735ec31c93548fbdba1b5ba7326a2e3a6c3000b5f9d944d20d4e2a1b21c486886fbd3468b1987dea21965065af7b4fb11628483eef',
	tokenType: 'Bearer'
};

const exchangeCodeForTokens = async () => {
	const {
		AMOCRM_CLIENT_ID,
		AMOCRM_CLIENT_SECRET,
		AMOCRM_CODE,
		AMOCRM_REDIRECT_URI
	} = amoCRMCredentials;

	const requestBody = {
		client_id: AMOCRM_CLIENT_ID,
		client_secret: AMOCRM_CLIENT_SECRET,
		grant_type: 'authorization_code',
		code: AMOCRM_CODE,
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
		if (tokens && tokens.access_token && tokens.refresh_token) {
			console.log('Access Token:', tokens.access_token);
			console.log('Refresh Token:', tokens.refresh_token);
		} else {
			console.log('Failed to exchange code for tokens');
		}
	} catch (error) {
		console.error('Error:', error);
	}
})();

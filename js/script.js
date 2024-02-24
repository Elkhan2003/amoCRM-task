const getLeads = async () => {
	const response = await fetch(
		`${cors_proxy}https://${subdomain}.amocrm.ru/api/v4/leads`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${access_token.accessToken}`
			}
		}
	);
	const responseData = await response.json();
	return responseData._embedded.leads;
};

const renderData = async () => {
	const usersData = await getLeads();
	console.log(usersData);

	const renderData = usersData.map(
		(item) =>
			`
				<tr>
					<td>${item.name}</td>
					<td>${item.price}</td>
					<td>${item.name}</td>
					<td>${new Date(item.created_at * 1000).toLocaleString()}</td>
					<td>${new Date(item.updated_at * 1000).toLocaleString()}</td>
				</tr>
			`
	);
	const getHtml = document.getElementById('tableBody');
	getHtml.innerHTML = renderData.join('');
};
renderData();

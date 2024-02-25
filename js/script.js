let lastFetchTime = 0;

const fetchDataWithRateLimit = async (entityType, limit) => {
	const now = Date.now();
	const timeElapsed = now - lastFetchTime;
	if (timeElapsed < 500) {
		await new Promise((resolve) => setTimeout(resolve, 500 - timeElapsed));
	}
	lastFetchTime = Date.now();

	try {
		const response = await fetch(
			`${corsProxy}https://${subdomain}.amocrm.ru/api/v4/${entityType}?&limit=${limit}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token.accessToken}`
				}
			}
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const responseData = await response.json();
		return responseData._embedded[entityType];
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};

const mergeData = (leadsData, contactsData) => {
	const mergedData = leadsData.map((lead) => {
		const contact = contactsData.find(
			(contact) => contact.created_at === lead.created_at
		);
		return {
			...lead,
			leadName: lead.name,
			contactName: contact ? contact.name : ''
		};
	});
	return mergedData;
};

const renderTable = (data) => {
	const renderData = data.map(
		(item) => `
        <tr>
            <td>${item.leadName}</td>
            <td>${item.price}</td>
            <td>${item.contactName}</td>
            <td>${new Date(item.created_at * 1000).toLocaleString()}</td>
            <td>${new Date(item.updated_at * 1000).toLocaleString()}</td>
        </tr>
    `
	);
	const tableBody = document.getElementById('tableBody');
	tableBody.innerHTML = renderData.join('');
};

const renderData = async (limit) => {
	try {
		const [leadsData, contactsData] = await Promise.all([
			fetchDataWithRateLimit('leads', limit),
			fetchDataWithRateLimit('contacts', limit)
		]);
		const mergedData = mergeData(leadsData, contactsData);
		renderTable(mergedData);
	} catch (error) {
		console.error('Error rendering data:', error);
	}
};

const paginationSelect = document.getElementById('paginationSelect');
paginationSelect.addEventListener('change', (event) => {
	const limit = parseInt(event.target.value);
	renderData(limit);
});

renderData(5);

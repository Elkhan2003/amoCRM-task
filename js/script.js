const getLeadsAndContacts = async (entityType, limit) => {
	const response = await fetch(
		`${cors_proxy}https://${subdomain}.amocrm.ru/api/v4/${entityType}?limit=${limit}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${access_token.accessToken}`
			}
		}
	);
	const responseData = await response.json();
	return responseData._embedded[entityType];
};

const mergeLeadsAndContacts = (leadsData, contactsData) => {
	const mergedData = [];
	const contactsMap = new Map(
		contactsData.map((contact) => [contact.created_at, contact])
	);

	for (const lead of leadsData) {
		const contact = contactsMap.get(lead.created_at);
		if (contact) {
			mergedData.push({
				...lead,
				leadName: lead.name,
				contactName: contact.name
			});
		} else {
			mergedData.push({ ...lead, leadName: lead.name, contactName: '' });
		}
	}

	return mergedData;
};

const renderData = async (limit) => {
	const leadsData = await getLeadsAndContacts('leads', limit);
	const contactsData = await getLeadsAndContacts('contacts', limit);

	const mergedData = mergeLeadsAndContacts(leadsData, contactsData);

	const renderData = mergedData.map((lead) => {
		return `
			<tr>
				<td>${lead.leadName}</td>
				<td>${lead.price}</td>
				<td>${lead.contactName}</td>
				<td>${new Date(lead.created_at * 1000).toLocaleString()}</td>
				<td>${new Date(lead.updated_at * 1000).toLocaleString()}</td>
			</tr>
		`;
	});

	const tableBody = document.getElementById('tableBody');
	tableBody.innerHTML = renderData.join('');
};

document
	.getElementById('paginationSelect')
	.addEventListener('change', (event) => {
		const limit = parseInt(event.target.value);
		renderData(limit);
	});

renderData(5);

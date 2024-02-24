const renderData = () => {
	const renderData = users.map(
		(item) =>
			`
				<tr>
					<td>${item.id}</td>
					<td>${item.firstName}</td>
					<td>${item.lastName}</td>
					<td>${item.role}</td>
					<td>${item.auth}</td>
					<td>${item.login}</td>
					<td>${item.password}</td>
					<td>${item.isActive}</td>
					<td>${item.price}</td>
					<td>${item.traffic}</td>
					<td>${item.createdAt}</td>
					<td>${item.updateAt}</td>
				</tr>
			`
	);
	const getHtml = document.getElementById('tableBody');
	getHtml.innerHTML = renderData.join('');
};
renderData();

let budgetSortOrder = 0;
const sortByBudget = () => {
	const tableBody = document.getElementById('tableBody');
	const rows = Array.from(tableBody.querySelectorAll('tr'));

	rows.sort((rowA, rowB) => {
		const budgetA = parseFloat(rowA.cells[2].textContent);
		const budgetB = parseFloat(rowB.cells[2].textContent);

		if (budgetSortOrder === 1) {
			return budgetA - budgetB;
		} else if (budgetSortOrder === 2) {
			return budgetB - budgetA;
		} else {
			budgetSortOrder = 1;
			return budgetA - budgetB;
		}
	});

	tableBody.innerHTML = '';
	rows.forEach((row) => {
		tableBody.appendChild(row);
	});
};

const sortByBudgetHeader = document.getElementById('sortByBudget');
sortByBudgetHeader.addEventListener('click', () => {
	if (budgetSortOrder === 2) {
		budgetSortOrder = 0;
	} else {
		budgetSortOrder++;
	}
	sortByBudget();
});

let nameSortOrder = 0;
const sortByName = () => {
	const tableBody = document.getElementById('tableBody');
	const rows = Array.from(tableBody.querySelectorAll('tr'));

	rows.sort((rowA, rowB) => {
		const nameA = rowA.cells[1].textContent.toLowerCase();
		const nameB = rowB.cells[1].textContent.toLowerCase();

		if (nameSortOrder === 1) {
			return nameA.localeCompare(nameB);
		} else if (nameSortOrder === 2) {
			return nameB.localeCompare(nameA);
		} else {
			nameSortOrder = 1;
			return nameA.localeCompare(nameB);
		}
	});

	tableBody.innerHTML = '';
	rows.forEach((row) => {
		tableBody.appendChild(row);
	});
};

const sortByNameHeader = document.getElementById('sortByName');
sortByNameHeader.addEventListener('click', () => {
	if (nameSortOrder === 2) {
		nameSortOrder = 0;
	} else {
		nameSortOrder++;
	}
	sortByName();
});

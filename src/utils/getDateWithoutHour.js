export const getDateWithoutHour = (date) => {
	let day = new Date(date).getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = new Date(date).getMonth();
	let monthPlus = month + 1;
	if (monthPlus < 10) {
		monthPlus = '0' + monthPlus;
	}

	const year = new Date(date).getFullYear();

	return `${day}.${monthPlus}.${year}`;
};

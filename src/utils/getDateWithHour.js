export const getDateWithHour = (date) => {
	let day = new Date(date).getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = new Date(date).getMonth();
	let monthPlus = month++;
	if (monthPlus < 10) {
		monthPlus = '0' + month;
	}

	const year = new Date(date).getFullYear();

	let hour = new Date(date).getHours();
	if (hour < 10) {
		hour = '0' + hour;
	}

	let minute = new Date(date).getMinutes();
	if (minute < 10) {
		minute = '0' + minute;
	}

	return `${day}.${monthPlus}.${year} ${hour}:${minute}`;
};

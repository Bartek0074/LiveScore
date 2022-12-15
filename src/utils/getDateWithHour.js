export const getDateWithHour = (date) => {
	let day = new Date(date).getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = new Date(date).getMonth();
	if (month < 10) {
		month = '0' + month;
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

	return `${day}.${month + 1}.${year} ${hour}:${minute}`;
};

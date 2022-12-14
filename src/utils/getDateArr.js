export const getDateArr = (currentDate) => {
	const day = 1000 * 60 * 60 * 24;

	const today = currentDate;

	const yesterday = today - day;
	const ereyesterday = today - 2 * day;
	const tomorrow = today + day;
	const overtomorrow = today + 2 * day;

	const getDate = (timestamp) => {
		const date = new Date(timestamp);
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	};

	return [
		getDate(ereyesterday),
		getDate(yesterday),
		getDate(today),
		getDate(tomorrow),
		getDate(overtomorrow),
	];
};

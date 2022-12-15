import { getDate } from "./getDate";

export const getDateArr = (currentDate) => {
	const day = 1000 * 60 * 60 * 24;

	const today = currentDate;

	const yesterday = today - day;
	const ereyesterday = today - 2 * day;
	const tomorrow = today + day;
	const overtomorrow = today + 2 * day;

	return [
		getDate(ereyesterday),
		getDate(yesterday),
		getDate(today),
		getDate(tomorrow),
		getDate(overtomorrow),
	];
};

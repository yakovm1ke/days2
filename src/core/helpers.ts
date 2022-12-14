export const getDateParams = (date: Date) => {
	return {
		year: date.getFullYear(),
		month: date.getMonth(),
		monthDay: date.getDate(),
		day: date.getDay(),
	}
}

/**
 * Вычисляет число дней в месяце.
 * @return число от 28 до 31
 */
export const getDaysInMonth = (date: Date): number => {
	const {year, month} = getDateParams(date)
	return 32 - new Date(year, month, 32).getDate()
}

/**
 * Вычисляет день недели первого дня месяца.
 * @returns число от 0 до 6, где 0 - это воскресенье
 */
export const getMonthStartDay = (date: Date): number => {
	const {year, month} = getDateParams(date)
	return new Date(year, month, 1).getDay()
}

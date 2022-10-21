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

/**
 * Вычисляет принадлежат ли две даты к одному месяцу
 * @returns boolean
 */
export const isSameMonth = (leftDate: Date, rightDate: Date): boolean => {
	return leftDate.getFullYear() === rightDate.getFullYear()
    && leftDate.getMonth() === rightDate.getMonth()
}

/**
 * Вычисляет принадлежат ли две даты к одному дню
 * @returns boolean
 */
export const isSameDay = (leftDate: Date, rightDate: Date): boolean => {
	return leftDate.getFullYear() === rightDate.getFullYear()
    && leftDate.getMonth() === rightDate.getMonth()
    && leftDate.getDate() === rightDate.getDate()
}

/**
 * Вычисляет является ли день выходным
 * @returns boolean
 */
export const isWeekend = (date: Date): boolean => {
	const day = date.getDay()
	return day === 0 || day === 6
}

/**
 * Вычисляет дату увеличенную на определенное число месяцев
 * @returns новую объект даты
 */
export const addMonth = (date: Date, value: number) => {
	const {year, month, monthDay} = getDateParams(date)

	const daysInTargetMonth = getDaysInMonth(new Date(year, month + value, 1))

	if (monthDay > daysInTargetMonth) {
		return new Date(year, month + value, daysInTargetMonth)
	}

	return new Date(year, month + value, monthDay)
}

/**
 * Вычисляет разницу между датами в годах
 */
export const getDifferenceInYears = (leftDate: Date, rightDate: Date): number => {
	const leftDateYear = leftDate.getFullYear()
	const rightDateYear = rightDate.getFullYear()

	return rightDateYear - leftDateYear
}

/**
 * Вычисляет разницу между датами в месяцах
 */
export const getDifferenceInMonths = (leftDate: Date, rightDate: Date): number => {
	const leftDateMonth = leftDate.getMonth()
	const rightDateMonth = rightDate.getMonth()

	const differenceInYears = getDifferenceInYears(leftDate, rightDate)

	if (!differenceInYears) {
		return rightDateMonth - leftDateMonth
	}
	return (rightDateMonth - leftDateMonth) + differenceInYears * 12
}

export const addZero = (value: number): string => {
	if (isNaN(value)) return ''
	if (value < 10) return `0${value}`
	return String(value)
}
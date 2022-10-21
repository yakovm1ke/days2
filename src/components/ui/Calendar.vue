<template>
  <div :class="$style.calendar">
    <div :class="$style.header">
      <button
        :class="$style.button"
        @click="changeMonth(-1)"
      >
        {{ '<' }}
      </button>
      <div :class="$style.title">
        {{ monthsMap.get(displayedDate.getMonth() + 1) }}
        {{ displayedDate.getFullYear() }} года
      </div>
      <button
        :class="$style.button"
        @click="changeMonth(1)"
      >
        {{ '>' }}
      </button>
    </div>
    <table :class="$style.table">
      <thead>
        <tr>
          <th>Пн</th>
          <th>Вт</th>
          <th>Ср</th>
          <th>Чт</th>
          <th>Пт</th>
          <th>Сб</th>
          <th>Вс</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="week of weeksCount"
          :key="week"
        >
          <td
            v-for="day of 7"
            :key="day"
            :class="[
              !isSameMonth(getDisplayDate(week, day), displayedDate) && $style.disabled,
              isSameDay(getDisplayDate(week, day), new Date()) && $style.today,
              isWeekend(getDisplayDate(week, day)) && $style.weekend,
              selectedDate && isSameDay(getDisplayDate(week, day), selectedDate) && $style.selected
            ]"
            @click="handleSelect(getDisplayDate(week, day))"
          >
            {{ getDisplayDate(week, day).getDate() }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="selectedDate"
      :class="$style.selectedCaption"
    >
      <button
        :class="$style.button"
        @click="selectedDate && changeDisplayedDate(selectedDate)"
      >
        {{ formattedSelectedDate }}
      </button>
      <button
        :class="$style.button"
        @click="selectedDate = null"
      >
        X
      </button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref, type Ref } from 'vue'
import { monthsMap } from '@/core/consts'
import { getDaysInMonth, getMonthStartDay, isSameDay, isSameMonth, isWeekend, getDateParams, addMonth, addZero } from '@/core/helpers'

function getDisplayDate(week: number, day: number) {
	// NOTE: day + 1 для смещения первого дня с ВС на ПН
	let date = (week - 1) * 7 + (day + 1) - currentStartDay.value

	// NOTE: для случая, когда у нас ВС - первый день месяца
	if (currentStartDay.value === 0) date -= 7

	const {year, month} = getDateParams(displayedDate.value)

	return new Date(year, month, date)
}
function changeDisplayedDate(date: Date | null) {
	if (!date) return

	const {year, month} = getDateParams(date)

	displayedDate.value = new Date(year, month, 1)
}
function changeMonth(value: number) {
	displayedDate.value = addMonth(displayedDate.value, value)
}
function handleSelect(date: Date) {
	if (!isSameMonth(date, displayedDate.value)) {
		changeMonth(date.getMonth() - displayedDate.value.getMonth())
	}
	selectedDate.value = date
}

const displayedDate = ref(new Date())
const selectedDate: Ref<Date | null> = ref(null)

const currentStartDay = computed(() => getMonthStartDay(displayedDate.value))
const currentDaysInMonth = computed(() => getDaysInMonth(displayedDate.value))
const weeksCount = computed(() => {
	const averageWeeks = (currentDaysInMonth.value + currentStartDay.value) / 7

	let weeks = averageWeeks

	if (averageWeeks % 1) {
		weeks = Math.ceil(averageWeeks)
	}

	return currentStartDay.value === 0 ? weeks + 1 : weeks
})

const formattedSelectedDate = computed(() => {
	if (!selectedDate.value) return

	let { year, month, monthDay } = getDateParams(selectedDate.value)
	const displayedMonth = month + 1

	return `${addZero(monthDay)}.${addZero(displayedMonth)}.${year}`
})

</script>

<style module>
.calendar {
  min-width: 300px;
  box-sizing: border-box;
  width: 100%;
  background: white;
  padding: 2em;
  border-radius: 2em;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--d2-blue);
  gap: 0.4em;
}
.title {
  display: flex;
  justify-content: center;
}
.button {
  padding: 0.6em 1em;
  border-radius: 0.4em;
}
.button:hover {
  background: var(--d2-white);
  cursor: pointer;
}
.today {
  text-decoration: underline;
}
.table {
  margin-top: 1em;
  background: white;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.table th {
  color: var(--d2-blue);
  text-align: left;
}
.table td,
.table th {
  padding: 0.6em 0;
  text-align: center;
  border-radius: 0.4em;
}
.table td:hover {
  background: var(--d2-white);
  cursor: pointer;
}
.weekend {
  color: var(--d2-red);
}
.selected {
  font-weight: 600;
  color: var(--d2-blue);
  background: var(--d2-white);
}
.disabled {
  color: var(--d2-neutral);
}
.selectedCaption {
  display: flex;
  color: var(--d2-neutral);
  margin-top: 1em;
  justify-content: center;
  align-items: center;
}
</style>
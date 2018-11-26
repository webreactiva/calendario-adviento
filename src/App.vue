<template>
  <span>
    <hero-head></hero-head>
    <div class="calendar-parent">
      <modals-container/>
      <v-dialog/>
      <calendar-view
        :events="events"
        :show-date="showDate"
        :time-format-options="{hour: 'numeric', minute:'2-digit'}"
        :enable-drag-drop="true"
        :disable-past="disablePast"
        :disable-future="disableFuture"
        :show-event-times="showEventTimes"
        :display-period-uom="displayPeriodUom"
        :display-period-count="displayPeriodCount"
        :starting-day-of-week="startingDayOfWeek"
        :class="themeClasses"
        @click-event="onClickEvent"
      />
    </div>
  </span>
</template>
<script>
// For testing against the published version
import {
	CalendarView,
	CalendarViewHeader,
	CalendarMathMixin,
} from "vue-simple-calendar"
require("vue-simple-calendar/static/css/default.css")
require("vue-simple-calendar/static/css/holidays-us.css")

import EventModal from "./components/EventModal"
import HeroHead from "./components/HeroHead"

export default {
	name: "App",
	components: {
		CalendarView,
		CalendarViewHeader,
		HeroHead,
	},
	mixins: [CalendarMathMixin],
	data() {
		return {
			siteUrl: "https://www.webreactiva.com",
			showDate: this.thisMonth(1),
			message: "",
			startingDayOfWeek: 1,
			disablePast: true,
			disableFuture: true,
			displayPeriodUom: "month",
			displayPeriodCount: 1,
			showEventTimes: false,
			newEventTitle: "",
			newEventStartDate: "",
			newEventEndDate: "",
			useDefaultTheme: true,
			useHolidayTheme: false,
			events: [
				{
					id: "e0",
					startDate: "2018-12-01",
					title: "Este es el primer día del calendario",
					description:
						"Así se mostrará el primero a partir del 1 de Diciembre de 2018. <br/> ¡Animate a participar! <a href='https://goo.gl/forms/4PcuSltEgihTkKxp1'>¡Aún hay huecos libres!</a>",
					tags: "Los mejores recursos de 2018",
					link: "https://goo.gl/forms/4PcuSltEgihTkKxp1",
					author: "Cuaquiera de vosotr@s 😉",
					author_link: "https://www.danielprimo.io/podcast",
				},
			],
		}
	},
	computed: {
		userLocale() {
			return this.getDefaultBrowserLocale
		},
		dayNames() {
			return this.getFormattedWeekdayNames(this.userLocale, "long", 0)
		},
		themeClasses() {
			return {
				"theme-default": true,
				"holiday-us-traditional": false,
				"holiday-us-official": false,
			}
		},
	},
	mounted() {},

	methods: {
		thisMonth(d, h, m) {
			const t = new Date("2018/12/1")
			return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
		},
		onClickEvent(event) {
			event.site_url = this.siteUrl
			this.$modal.show(
				EventModal,
				{
					event,
				},
				{
					transition: "slide-fade",
					height: "auto",

					adaptive: true,
				}
			)
		},
		setShowDate(d) {
			this.showDate = d
		},
	},
}
</script>

<style>
html,
body {
	height: 100%;
	margin: 0;
	background-color: #f7fcff;
}

#app {
	display: flex;
	flex-direction: row;
	font-family: Calibri, sans-serif;
	width: 95vw;
	min-width: 30rem;
	max-width: 100rem;
	min-height: 40rem;
	margin-left: auto;
	margin-right: auto;
}

.calendar-controls {
	margin-right: 1rem;
	min-width: 14rem;
	max-width: 14rem;
}

.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
	max-height: 80vh;
	background-color: white;
}

/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}

/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */

/* Add some styling for events tagged with the "birthday" class */
.calendar .event.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
}

.calendar .event.birthday::before {
	content: "\1F382";
	margin-right: 0.5em;
}

.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
</style>

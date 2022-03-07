import React, { useState } from 'react';

const days = [
    'Mon','Tue','Wed','Thu','Fri','Sat','Sun'
];

const month = [
    'January','Feburary','March','April','May','June','July','August',
    'September','October','November','December'
];

const Calendar = (daysShort = days,monthNames=month) => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`
    const daysOfWeek = [1,2,3,4,5,6,0];
    const [selectedDate, setSelectedDate] = useState(today);
    const lastDayOfSelectedMonth = new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0);
    const lastDayOfPrevMonth = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),0);
    const numberOfDays = lastDayOfSelectedMonth.getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1).getDay();
    const startingPoint = daysOfWeek.indexOf(firstDayOfMonth) + 1;
    const prevMonthStartingPoint = lastDayOfPrevMonth.getDate() - daysOfWeek.indexOf(firstDayOfMonth) +1;
    console.log(prevMonthStartingPoint);
    // const endPoint = 
    return ( 
        <div>Hello Calendar</div>
     );
}
 
export default Calendar;
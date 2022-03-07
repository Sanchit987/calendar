import React, { useState } from 'react';

const days = [
    'Mon','Tue','Wed','Thu','Fri','Sat','Sun'
];

const month = [
    'January','Feburary','March','April','May','June','July','August',
    'September','October','November','December'
];

const Calendar = (daysShort = days,monthNames=month) => {
    return ( 
        <div>Hello Calendar</div>
     );
}
 
export default Calendar;
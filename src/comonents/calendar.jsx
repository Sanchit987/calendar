import React, { Fragment,useState } from 'react';
import useCalendar from './usecalendar';
import Toggle from './Toggle';

const Calendar = () => {

    const {daysShort, monthNames, todayFormatted, calendarRows, selectedDate, getPrevMonth, getNextMonth} = useCalendar();
    const [toggled, setToggled] = useState(false);

    const dateClickHandler = date => {
        console.log(date);
    }

    
    return ( <Fragment>
        <div className="container container-light">
            <div className="heading-flex">
                <button className={`button ${toggled?"button-dark":"button-light"}`} onClick={getPrevMonth}>{"<"}</button>
                    <p className="heading">{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
                <button className={`button ${toggled?"button-dark":"button-light"}`} onClick={getNextMonth}>{">"}</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(calendarRows).map(cols => {
                            return <tr key = {cols[0].date}>
                                {cols.map(col => (
                                    col.date === todayFormatted ? <td key={col.date} className={`${col.classes} today`} onClick={()=>dateClickHandler(col.date)}>
                                        {col.value}
                                    </td>
                                    : <td key={col.date} className={col.classes} onClick={() => {dateClickHandler(col.date)}}>{col.value}</td>
                                ))}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <Toggle onChange={(e) => setToggled(e.target.checked)}/>
    </Fragment> );
}
 
export default Calendar;
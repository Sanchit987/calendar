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
        <div className="parent">
        <Toggle onChange={(e) => setToggled(e.target.checked)}/>    
            <div className={`container ${toggled?'container-dark':'container-light'}`} >
                <div className="heading-flex">
                    <button className={`button ${toggled?'button-dark':'button-light'}`} onClick={getPrevMonth}>{"<"}</button>
                        <p className={`heading ${toggled?'heading-dark':'heading-light'}`}>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
                    <button className={`button ${toggled?'button-dark':'button-light'}`} onClick={getNextMonth}>{">"}</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            {daysShort.map(day => (
                                <th className={`${toggled?'month-dark':'month-light'}`} key={day}>{day}</th>
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
                                        : <td key={col.date} className={`${toggled?(col.classes==='in-prev-month' || col.classes==='in-next-month')?col.classes + " next-prev-dark":col.classes+" current-month-dark":col.classes}`} onClick={() => {dateClickHandler(col.date)}}>{col.value}</td>
                                    ))}
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </Fragment> );
}
 
export default Calendar;
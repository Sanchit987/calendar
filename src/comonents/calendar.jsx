import React, { Fragment,useState } from 'react';
import useCalendar from './usecalendar';
import Toggle from './Toggle';
import PickerComponent from './pickerComponent';
import DropDown from './dropDown';

const Calendar = () => {

    const {daysShort, monthNames, todayFormatted, calendarRows, selectedDate, getPrevMonth, getNextMonth} = useCalendar();
    const [toggled, setToggled] = useState(false);
    const [dateSelection, setDateSelection] = useState(todayFormatted);
    const [openToggle,setOpenToggle] = useState(false);
    let years = []
    for(let i = 1950; i<=2050 ;i++){
        years.push(i.toString());
    }
    const dateClickHandler = date => {
        setDateSelection(date);
    }

    const onDateChange = (e) => {}

    const openClosePicker = () => {
        setOpenToggle(!openToggle);
    }

       
    return ( <Fragment>
        <div className="parent">
        <Toggle onChange={(e) => setToggled(e.target.checked)}/>
        <PickerComponent date={dateSelection} mode={toggled} onChange={onDateChange} onClick={openClosePicker}/>   
            <div className={`container ${toggled?'container-dark':'container-light'} ${openToggle ?'':'display-none'}`} >
                <div className="heading-flex">
                    <button className={`button ${toggled?'button-dark':'button-light'}`} onClick={getPrevMonth}><img class={`arrow ${toggled?'arrow-dark':''}`} src={require("../assets/images/Medium.png")} alt=""/></button>
                        <p className={`heading ${toggled?'heading-dark':'heading-light'}`}>
                            <div className="dropdown">
                                <DropDown name="month" toggled={toggled} selected = {`${monthNames[selectedDate.getMonth()]}`} content={monthNames}/>
                                <DropDown name="years" toggled={toggled} selected = {`${selectedDate.getFullYear()}`} content={years}/>
                            </div>
                        </p>
                    <button className={`button ${toggled?'button-dark':'button-light'}`} onClick={getNextMonth}><img class={`arrow arrow-right ${toggled?'arrow-dark':''}`} src={require("../assets/images/Medium.png")} alt=""/></button>
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
                                        col.date === dateSelection ? <td key={col.date} className={`${col.classes} today`} onClick={()=>dateClickHandler(col.date)}>
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
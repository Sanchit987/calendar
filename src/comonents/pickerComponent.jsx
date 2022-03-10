import React from 'react';

const PickerComponent = ({date, onChange, onClick,mode}) => {
    return ( <input className={`picker ${mode?'picker-dark':''}`} type="text" value={date} onChange={onChange} onClick={onClick}/>);
}
 
export default PickerComponent;
import React from 'react';

const DropDown = ({name,content,selected, toggled}) => {
    return ( 
        <select className={`drop ${toggled?"drop-dark":"drop-light"}`} name={name}>
            {content.map(x => <option key={x} className={`${toggled?"drop-dark":"drop-light"}`} selected={selected===x?true:false} value={x}>{x}</option>)}
        </select>
     );
}
 
export default DropDown;
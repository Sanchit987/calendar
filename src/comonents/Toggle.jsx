import React, { Fragment } from 'react';

const Toggle = ({onChange}) => {

    return ( <Fragment>
        <label className="toggle">
            <input className="check" type="checkbox" onChange={onChange} />
            <span className="slider"/>
        </label>
    </Fragment> );
}
 
export default Toggle;
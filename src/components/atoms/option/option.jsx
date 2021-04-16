import React from 'react';
import './option.scss';

const Option = props => {
    const {id, option, action, value, letter, className} = props;
    return (  
        <div className="a-option">
            <input type="radio" id={"option-" + id} name="option" onClick={action} />
            <label htmlFor={"option-"+id} className={ className }>
                {letter != null ? <span> { letter } </span>:""}
                <span>
                    { option }
                </span>
            </label>
        </div>
    );
}
 
export default Option;
import React from 'react';
import { Link } from "react-router-dom";
import './button.scss';

const Button = props => {
    const { type, text, link, action} = props
    if(type=== "button"){
        return ( 
            <button className="o-button" onClick={action}>{text}</button>
         );
    }else{
        return ( 
            <Link to={ link }  className="o-button">{text}</Link>
         );
    }
}
 
export default Button;
import React from 'react';
import './card.scss';
import img from '../../../img/undraw_adventure_4hum 1.svg'

const Card = props => {
    const {children} = props;
    return ( 
        <div className="o-card">
            <img src={img} alt="" className="o-card-img"/>
            {children}
        </div>
     );
}
 
export default Card;
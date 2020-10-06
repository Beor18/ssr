import React from 'react';
import './Button.styl';

const Button = ({text}) => {
    return (
        <div className="buttons">
            <a href="#" className="buttons link">{text}</a>
        </div>
    );
}

export default Button;
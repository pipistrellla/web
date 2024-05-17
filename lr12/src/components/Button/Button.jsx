import React, { FC } from 'react';
import cls from './Button.module.css';

const Button = ({ children, bgColor }) => (
    <button className={`${cls.Button} ${cls[bgColor]}`} type="button">
        {children}
    </button>
);

export default Button;

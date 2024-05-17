import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.css';
import Logo from '../../../assets/img/logo.svg';
import Request from '../../../assets/img/measering.svg';
import Calculator from '../../../assets/img/calculation.svg';
import Button from '../../Button/Button';

const Navbar = () => (

    <div className={cls.Navbar}>

        <img
            src={Logo}
            className={cls.icon}
            alt="logo"
        />

        <div className={cls.NavbarLinks}>
            <Link to="/services" className={cls.text}>
                Services
            </Link>
            <Link to="/products" className={cls.text}>
                Products
            </Link>
            <Link to="/about_us" className={cls.text}>
                About us
            </Link>
            <Link to="/portfolio" className={cls.text}>
                Portfolio
            </Link>
            <Link to="/FAQ" className={cls.text}>
                FAQ
            </Link>
            <Link to="/contacts" className={cls.text}>
                Contacts
            </Link>

        </div>
        <div className={cls.navbarBtn}>

            <Button bgColor="red">
                <img
                    src={Request}
                    className={cls.icon}
                    alt="measure"
                />
                Make request
            </Button>
            <Button
                className={cls.Btn}
                bgColor="blue"
            >
                <img
                    src={Calculator}
                    className={cls.icon}
                    alt="calculator"
                />
                Calculation
            </Button>

        </div>

    </div>
);

export default Navbar;

import React from 'react';
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.headerBlock}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};
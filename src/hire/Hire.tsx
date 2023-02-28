import React from 'react';
import s from './Hire.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${styleContainer.container} ${s.hireContainer}`}>
                <h2>Considering remote work.</h2>
                <div className={s.hireMe}>Hire me.</div>
            </div>
        </div>
    );
};

import React from 'react';
import s from './Work.module.css'

type WorkPropsType = {
    title: string,
    description?: string,
}

export const Work = (props:WorkPropsType) => {
    return (
        <div className={s.work}>
            <div className={s.background}>
                <h4>Look at</h4>
            </div>
            <div className={s.descriptionContainer}>
                <span className={s.workTitle}>{props.title}</span>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};


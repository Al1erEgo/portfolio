import React from 'react';
import s from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work title={'Project 1'} description={'About'}/>
                    <Work title={'Project 2'} description={'Aboutgkfjdhkldhgl;ldfhglkdfhg;dkjfhgldkjfhgkd;fjhgldkjfhglkdjhfglkjdhfglkjdhflkgjhdflkjghdlkfjghdklfjfhglkdjfhgdlkjfh'}/>
                    <Work title={'Project 3'} description={'About'}/>
                    <Work title={'Project 3'} description={'About'}/>
                    <Work title={'Project 3'} description={'About'}/>
                </div>
            </div>
        </div>
    );
};
